import { supabase } from '$lib/core';
import { wrapMachine } from '$lib/kit/state';

import { invoke, state, state as final, transition, reduce, 
  immediate, guard, createMachine } from 'robot3';

const signin = async (context, event) => {
  let { user, error } = await supabase.auth.signIn({
    email: event.email, password: event.password
  });
  if ( !error ) { return user; } else { throw error; }
};

const signout = async () => {
  const { error } = await supabase.auth.signOut();
  if ( error ) { throw error; }
};

const checkStatus = () => {
    let user = supabase.auth.user();
    userNotNull = !(user === null);
    return userNotNull;
};

export const signinMachine = createMachine('signedOut', {
  // TODO - make this the starting state
  // For some reason, it currently seems to get stuck
  checkingStatus: state(
    immediate('signedIn', guard(checkStatus)),
    immediate('signedOut')
  ),
  signedOut: state(
    transition('signinRequest', 'signingIn')
  ),
  signingIn: invoke(signin,
    transition('done', 'signedIn',
      reduce((context, event) => ({...context, user: event.data}))
    ),
    transition('error', 'signinFailure',
      reduce((context, event) => ({...context, error: event.error}))
    )
  ),
  signedIn: state(
    transition('signoutRequest', 'signingOut')
  ),
  signingOut: invoke(signout,
    transition('done', 'signedOut',
      reduce((context) => ({...context, 
        user: null
      }))
    ),
    transition('error', 'signoutFailure',
      reduce((context, event) => ({...context, error: event.error}))
    )
  ),
  signinFailure: final(),
  signoutFailure: final()
});

export const signinModel = wrapMachine(signinMachine);
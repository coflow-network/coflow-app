import { supabase } from '$lib/core';
import { wrapMachine } from '$lib/kit/state';

import { invoke, state, state as final, transition, 
  reduce, createMachine } from 'robot3';

const signup = async (context, event) => {
  let { error, data } = await supabase.auth.signUp({
    email: event.email, password: event.password
  });
  if ( !error ) { return data; } else { throw error; }
};

export const signupMachine = createMachine({
  idle: state(
    transition('signupRequest', 'signingUp')
  ),
  signingUp: invoke(signup,
    transition('done', 'signupSuccess',
      reduce((context, event) => ({...context, 
        user: event.data
      }))
    ),
    transition('error', 'signupFailure',
      reduce((context, event) => ({...context, 
        error: event.error
      }))
    )
  ),
  signupSuccess: final(),
  signupFailure: final()
});

export const signupModel = wrapMachine(signupMachine);
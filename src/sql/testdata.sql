insert into spaces (name) values ('test space');

insert into flows (name, space) values (
  'test flow', 
  (select id from spaces where name = 'test space')
);

insert into cards (name, flow) values (
  'test card',
  (select id from flows where name = 'test flow')
);

insert into vibes (emoji, line) values (
  '💩',
  'test vibe'
);

insert into reactions (body, card, vibe) values (
  'test reaction',
  (select id from cards where name = 'test card'),
  (select id from vibes where emoji = '💩')
);
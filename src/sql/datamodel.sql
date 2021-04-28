drop table if exists reactions cascade;
drop table if exists cards cascade;
drop table if exists flows cascade;
drop table if exists spaces cascade;
drop table if exists vibes cascade;

create table vibes (
    id serial primary key
    ,emoji varchar(1) not null
    ,line varchar(32) not null
);

create table spaces (
    id serial primary key
    ,parent int references spaces on delete cascade
    ,name varchar(32) not null
    ,blurb varchar(320)
    ,doc jsonb
);

insert into spaces ( name ) values ( 'Coflow Network Home' );

create table flows (
    id serial primary key
    ,parent int not null references spaces on delete cascade
    ,name varchar(32) not null
    ,blurb varchar(320)
    ,doc jsonb
);

create table cards (
    id serial primary key
    ,parent int not null references flows on delete cascade
    ,name varchar(32) not null
    ,blurb varchar(320)
    ,doc jsonb
);

create table reactions (
    id serial primary key
    ,card int references cards on delete cascade
    ,reaction int references reactions on delete cascade 
      check (not ((reaction is null) and (card is null)))
      check ((reaction is not null) or (card is not null))
    ,vibe int not null references vibes
    ,body text
    ,doc jsonb
);
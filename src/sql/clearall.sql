delete from spaces where name = 'test space';

delete from vibes where emoji = '💩';

drop table if exists reactions cascade;
drop table if exists cards cascade;
drop table if exists flows cascade;
drop table if exists spaces cascade;
drop table if exists vibes cascade;
create table todo (
    id float primary key auto_increment,
    todo text not null,
    completed boolean not null default false,
  user_id int not null
); 

INSERT INTO todo(todo, completed) VALUES('todo1', true);

CREATE TABLE user (
id INT PRIMARY KEY auto_increment,
email varchar(255) not null,


pw varchar(255) not null
);
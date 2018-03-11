-- create the burgers database
CREATE DATABASE burgers_db;

-- use the burders_db
USE burgers_db;

-- create the burgers table
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255),
	devoured BOOLEAN,
	PRIMARY KEY (id)
);
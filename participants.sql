DROP DATABASE IF EXISTS participants;
CREATE DATABASE participants;

\c participants;

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE clubs (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE degrees (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    degree_id INT REFERENCES degrees(id),
    category_id INT REFERENCES categories(id),
    age INT,
    dob DATE,
    club_id INT REFERENCES clubs(id)
);

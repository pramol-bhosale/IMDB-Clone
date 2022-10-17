
# IMDB-Clone
This Repository contain webapp like IMDB website where you can find various movies and also add new movies.
 tried to clear some of react and Node js  basic concepts through it.

<br/>

<img src="https://img.shields.io/static/v1?label=frontend&message=react.js&color=blue" /> <img src="https://img.shields.io/static/v1?label=backendend&message=node.js&color=brightgreen" /> <img src="https://img.shields.io/static/v1?label=database&message=mysql&color=orange" />
<br/>
 # Packages and Dependencies

## 1) body-parser

```
npm install body-parser --save
```
## 2) express

```
npm install express --save
```
## 3) cors

```
npm install cors --save
```
## 4) nodemon

```
npm install nodemon --save
```
## 5) axios
```
npm install axios --save
```
## 6) mysql
```
npm install mysql --save
```
<br/>

***
# Schema of Table 

## 1) Movies
```sql
CREATE TABLE Movies(
    Movie_id int(4) NOT NULL auto_increment,
    Name varchar(128) NOT NULL,
    `Year of Release` varchar(4),
    Plot varchar(128),
    PRIMARY KEY(Movie_id)
    );
```

## 2) Actors
```sql
CREATE TABLE Actors(
    Act_id int(4) NOT NULL auto_increment,
    Name varchar(128) NOT NULL,
    Gender varchar(10),
    DOB date,
    Bio varchar(256),
    PRIMARY KEY(Act_id)
    );
```

## 3) Producers
```sql
CREATE TABLE Producers(
    Prod_id int(4) NOT NULL auto_increment,
    Name varchar(128) NOT NULL,
    Gender varchar(10),
    DOB date,
    Bio varchar(256),
    PRIMARY KEY(Prod_id)
    );
```

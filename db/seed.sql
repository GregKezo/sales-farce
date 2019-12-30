create table users (
    id serial primary key
    ,is_admin BOOLEAN
    ,email varchar(100)
    ,password varchar(255)
    ,reports_to INT
    ,first_name varchar(30)
    ,last_name varchar(30)
    ,phone_number varchar(20)
);


create table client (
    id serial primary key
    ,first_name varchar(50)
    ,last_name varchar(50)
    ,client_of int references users(id)
    ,phone_number varchar(20)
    ,email varchar(100)
    ,notes text
    ,street_address varchar(300)
    ,city varchar(75)
    ,zip_code varchar(12)
    ,state varchar(5)
    ,country varchar(50)
    ,birthday date
    ,last_updated_by int
    ,last_updated_on TIMESTAMP
);


create table task (
    id serial PRIMARY KEY
    ,doer int references users(id)
    ,doee int references client(id)
    ,do_by time
    ,task_type varchar(100)
    ,to_do text
    ,is_done BOOLEAN
    ,last_updated_by int
    ,last_updated_on TIMESTAMP
);


create table securities (
    id serial PRIMARY KEY
    ,symbol VARCHAR(20)
    ,name varchar(150)
    ,exchange VARCHAR(10)
    ,sector varchar(30)
    ,industry varchar(30)
    ,sec_type varchar(20)
);


create table client_securities (
    id serial primary key
    ,securities_id int references securities(id)
    ,client_id int REFERENCES client(id)
    ,shares decimal
    ,purchase_date date
    ,cost_basis decimal
    ,historical_data json
);



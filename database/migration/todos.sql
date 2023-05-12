create type status as ENUM('process', 'succes', 'fail');

create table todos(
    todo_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    todo_title VARCHAR(64) not null,
    category_id uuid not null,
    todo_text text not null,
    todo_status status DEFAULT 'process',
    todo_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foreign key(category_id)
        REFERENCES category(category_id)
         on DELETE set NULL
); 
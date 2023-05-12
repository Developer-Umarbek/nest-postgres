create EXTENSION if not EXISTS "uuid-ossp";

create table category(
    category_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_name VARCHAR(32) not null,
    category_created_at TIMESTAMP not NULL DEFAULT CURRENT_TIMESTAMP  
);

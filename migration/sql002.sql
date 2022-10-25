/********************************************
* key_item
*********************************************/
UPDATE key_item
SET key_value = '0002'
WHERE key_code = 'DatabaseVersion';
/********************************************
* blog
*********************************************/
CREATE TABLE blog (
   "id"  id uuid NOT NULL   DEFAULT uuid_generate_v4(),
    "title" varchar NOT NULL,
    "description" varchar,
    "author" varchar(150),
    "content" text,
    PRIMARY KEY ("id"),
	created_at timestamp with time zone NOT NULL   DEFAULT now(),
  updated_at timestamp with time zone NULL
)

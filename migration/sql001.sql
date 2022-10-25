/********************************************
* key_item
*********************************************/
CREATE TABLE "key_item" (
    "key_group" varchar(25) NOT NULL,
    "key_code" varchar(100) NOT NULL,
    "key_value" varchar(255),
    "comment" varchar,
    PRIMARY KEY ("key_group","key_code"),
	created_at timestamp with time zone NOT NULL   DEFAULT now()
)
;


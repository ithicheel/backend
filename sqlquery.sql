create table start_backend.product (
	product_id varchar(100) NOT NULL UNIQUE,
    product_name varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL UNIQUE,
    product_price mediumint NOT NULL,
    product_desc varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL UNIQUE,
    product_size tinyint DEFAULT 1,
    product_cate_id varchar(100) NOT NULL,
	product_img varchar(150) DEFAULT NULL,
    PRIMARY KEY (product_id)
);

create table start_backend.category (
	cate_id varchar(100) NOT NULL UNIQUE,
    cate_name varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    cate_count_product tinyint DEFAULT NULL,
    cate_balance tinyint DEFAULT NULL
);

create table start_backend.order (
	order_product_id varchar(100) NOT NULL,
    order_product_name varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    order_product_price mediumint NOT NULL,
    order_product_count tinyint NOT NULL,
    order_product_total_price int,
    order_product_size tinyint NOT NULL,
	order_product_img varchar(150) DEFAULT NULL
);
create table start_backend.users (
	user_id varchar(100) NOT NULL UNIQUE,
    user_email varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL unique,
    user_pass varchar(100) NOT NULL,
    user_date datetime,
    user_type varchar(1) not null
);

-- ----------- --
-- INSERT INTO --
-- ----------- -- 
INSERT INTO start_backend.users (user_id, user_email, user_pass, user_date , user_type)
values("sdfjksdfdsfjl34534fdd", "admin@backend.com", "admin1234", "2021-01-29", "a");

INSERT INTO start_backend.product (product_id, product_name, product_price,product_desc ,product_size, product_cate_id, product_img)
values("swerw34rrfjsl5jk34jl54231", "Бүргэр", 5600, "талхтай бяслагтай хиамтай бүргэр", "", "sdfsdf334jlkjsdoisp3443" , null);

INSERT INTO start_backend.product (product_id, product_name, product_price,product_desc ,product_size, product_cate_id, product_img)
values("swer3454sl5jk34jl54231", "Бүргэр", 5600, null, "", null, null);


INSERT INTO start_backend.category (cate_id, cate_name,  cate_count_product, cate_balance )
values ("sdfsdf334jlkjsdoisp3443", "Бүргэр цэс", 3, null);
INSERT INTO start_backend.order (order_product_id, order_product_name ,order_product_price ,order_product_count , order_product_total_price , order_product_size , order_product_img )
values ("swerw34rrfjsl5jk34jl54231", "Бүргэр", 5600, 3, 16800, 2, null);
-- ------ --
-- SELECT --
-- ------ --
select * from start_backend.users;

select * from start_backend.product; 

UPDATE start_backend.product
SET product_id="swerw345rfjsl5jk34jl54345", product_name="Бууз", product_price=1900, product_desc=null, product_size=null , product_cate_id=null, product_img=null
WHERE product_id ="swerw345rfjsl5jk34jl54345";
select * from start_backend.category; 

select sp.product_name, sp.product_price
from start_backend.category ss, start_backend.product sp
where ss.cate_id = sp.product_cate_id;

select * from start_backend.order


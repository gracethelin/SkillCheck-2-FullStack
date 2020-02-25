UPDATE products 
SET product_name = $1, product_price=$2, product_image=$3
WHERE product_id=$4;

SELECT * FROM products;
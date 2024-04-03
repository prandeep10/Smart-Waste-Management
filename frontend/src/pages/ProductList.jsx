import React from "react";
import Product from "../components/Product"; // Import the Product component

const ProductList = ({ products }) => {
	return (
		<div
			className="product-list"
			style={{ display: "flex", flexWrap: "wrap", width: "100%" }}
		>
			{products.map((product) => (
				<Product
					key={product.id}
					name={product.name}
					price={product.price}
					image={product.image}
					description={product.description}
					coins={product.coins}
				/>
			))}
		</div>
	);
};

export default ProductList;
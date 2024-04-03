import React from "react";

const Product = ({ name, price, image, description, coins }) => {
	return (
		<div className="product">
			<img
				src={image}
				alt={name}
				style={{ width: "200px", height: "200px" }}
			/>
			<h3>{name}</h3>
			<p>₹{price}</p>
			<p>{description}</p>
			<p>{coins}</p>
			<button>Buy</button>
			<button>Redeem</button>
		</div>
	);
};

export default Product;

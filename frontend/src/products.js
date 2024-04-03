import bag from "./assets/images/bag.jpg";
import cream from "./assets/images/cream.jpg";
import lotion from "./assets/images/lotion.jpg";
import perfume from "./assets/images/perfume.jpg";

const products = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
		image: bag,
		description: "Product 1 description",
		coins: 100,
	},
	{
		id: 2,
		name: "Product 2",
		price: 200,
		image: cream,
		description: "Product 2 description",
		coins: 200,
	},
	{
		id: 3,
		name: "Product 3",
		price: 300,
		image: lotion,
		description: "Product 3 description",
		coins: 300,
	},
	{
		id: 4,
		name: "Product 4",
		price: 400,
		image: perfume,
		description: "Product 4 description",
		coins: 400,
	},
];

export { products };

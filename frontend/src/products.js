import bag from "./assets/images/bag.jpg";
import cream from "./assets/images/cream.jpg";
import lotion from "./assets/images/lotion.jpg";
import perfume from "./assets/images/perfume.jpg";

const products = [
	{
		id: 1,
		name: "Hand bag",
		price: 100,
		image: bag,
		description: "Eco Friendly Handmade bag",
		coins: 100,
	},
	{
		id: 2,
		name: "Cream",
		price: 200,
		image: cream,
		description: "Eco Friendly cream",
		coins: 200,
	},
	{
		id: 3,
		name: "Lotion",
		price: 300,
		image: lotion,
		description: "Eco Friendly lotion",
		coins: 300,
	},
	{
		id: 4,
		name: "Perfume",
		price: 400,
		image: perfume,
		description: "Eco Friendly perfume",
		coins: 400,
	},
];

export { products };

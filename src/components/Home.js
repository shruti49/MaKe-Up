import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Home(props) {
	const [productList, setproductList] = useState([]);

	const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

	const fetchData = async () => {
		try {
			const response = await fetch(API_URL);
			const data = await response.json();
			setproductList(data);
			console.log(data);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="home">
			<div className="container">
				<h2 className="text-center">{props.heading}</h2>
				<ProductList productList={productList} />
			</div>
		</div>
	);
}

export default Home;

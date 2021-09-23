import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

function Products({ heading, type, parentCallback }) {
	const [productList, setproductList] = useState([]);
	const [loader, setLoader] = useState(true);

	const fetchData = async () => {
		try {
			let API_URL = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`;
			parentCallback(20);
			const response = await fetch(API_URL);
			const data = await response.json();
			parentCallback(60);
			setproductList(data);
			setLoader(false);
			parentCallback(100);
			console.log(data);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-line
	}, []);

	return (
		<div className="container">
			<h2 className="text-center" style={{ marginTop: "70px" }}>
				{heading}
			</h2>
			{loader && <Spinner />}
			<div className="row">
				{productList.map((product) => (
					<div className="col-4" key={product.id}>
						<ProductItem product={product} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;

Products.propTypes = {
	heading: PropTypes.string,
};

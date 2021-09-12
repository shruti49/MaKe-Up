import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
	return (
		<div className="row">
			{props.productList.map((product) => (
				<div className="col-4" key={product.id}>
					<ProductItem product={product} />
				</div>
			))}
		</div>
	);
}

export default ProductList;

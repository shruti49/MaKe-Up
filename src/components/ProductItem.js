import React from "react";

function ProductItem({product}) {
	return (
		<div className="card my-3 product-item">
			<img src={product.image_link ? product.image_link : ""} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				<p className="card-text">{product.description}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
			</ul>
			<div className="card-body">
				<a href="/" className="card-link">
					Card link
				</a>
				<a href="/" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
}

export default ProductItem;

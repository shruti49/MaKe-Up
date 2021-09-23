import React from "react";

function CategoryCard({ title, imageLink }) {
	return (
		<div className="card">
			<img
				src={process.env.PUBLIC_URL + `/images/${imageLink}`}
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<p className="card-text">{title}</p>
			</div>
		</div>
	);
}

export default CategoryCard;

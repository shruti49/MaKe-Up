import React from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

function Categories({ heading }) {
	return (
		<div className="container categories">
			<h2 className="my-3">{heading}</h2>
			<div className="row">
				<div className="col-4">
					<Link to="/blushers">
						<CategoryCard title="Blusher" imageLink="./blusher.jpeg" />
					</Link>
				</div>
				<div className="col-4">
					<Link to="/bronzers">
						<CategoryCard title="Bronzer" imageLink="bronzer.jpeg" />
					</Link>
				</div>
				<div className="col-4">
					<Link to="/foundation">
						<CategoryCard title="Foundation" imageLink="foundation.jpg" />
					</Link>
				</div>
			</div>
			<div className="row my-3">
				<div className="col-4">
					<Link to="/eyeliner">
						<CategoryCard title="Eyeliner" imageLink="eyeliner.jpg" />
					</Link>
				</div>
				<div className="col-4">
					<Link to="/eyeshadow">
						<CategoryCard title="Eyeshadow" imageLink="eyeshadow.jpg" />
					</Link>
				</div>
				<div className="col-4">
					<Link to="/mascara">
						<CategoryCard title="Mascara" imageLink="mascara.jpg" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Categories;

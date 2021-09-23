import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Home from "./components/Home";

import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
	const [progress, setProgress] = useState(0);
	const callback = (progress) => {
		console.log(progress);
		//setProgress({ progress: progress });
	};

	return (
		<Router>
			<div className="app">
				<LoadingBar color="#f11946" progress={progress} height={3} />
				<Navbar title="MaKe-Up" />
				<Switch>
					<Route exact path="/">
						<Home
							heading="Trending Products"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
					<Route exact path="/categories">
						<Category heading="Categories" />
					</Route>
					<Route exact path="/blushers">
						<Products
							heading="Blusher"
							type="blush"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
					<Route exact path="/bronzers">
						<Products
							heading="Bronzer"
							type="bronzer"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
					<Route exact path="/foundation">
						<Products
							heading="Foundation"
							type="foundation"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
					<Route exact path="/eyeshadow">
						<Products
							heading="Eyeshadow"
							type="eyeshadow"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
					<Route exact path="/eyeliner">
						<Products
							heading="Eyeliner"
							type="eyeliner"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
					<Route exact path="/mascara">
						<Products
							heading="Mascara"
							type="mascara"
							parentCallback={(progress) => setProgress(progress)}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		
		<div className="app">
			<Navbar title="MaKe-Up" />
			<Home heading="Trending Products" />
		</div>
	);
}

export default App;

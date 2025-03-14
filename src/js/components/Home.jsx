import React, { useEffect, useState } from "react";
import { Counter } from "../counter";


const Home = () => {
	const [count, setCount] = useState(0);
 
	const four = Math.floor(count/1000)
	const three = Math.floor(count/100)
	const two = Math.floor(count/10)
	const one = Math.floor(count)

	useEffect(() => {
		const interval = setInterval(() => {
		setCount((prevCount) => prevCount + 1);
		
	}, 1000);
	return () => clearInterval(interval)
	}, [])

	

	return (
		<div>
			<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/> 
		</div>
		
	);
};

export default Home;
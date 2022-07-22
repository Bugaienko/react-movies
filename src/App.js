import {Header} from './layout/Header'
import React, {Fragment} from "react";
import {Footer} from "./layout/Footer";
import {Main} from "./layout/Main";

function App() {
	return (
		<Fragment>
			<Header/>
			<Main />
			<Footer/>
		</Fragment>
	);
}

export default App;

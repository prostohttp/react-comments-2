import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CommentsList} from "./components/comments-list";
import FormComponent from "./components/form";
import data from "./utils/data";


function App() {
	const [dataState, setDataState] = useState(data);
	return (
		<div className="App container p-3">
			<CommentsList data={dataState}/>
			<FormComponent data={dataState} setData={setDataState}/>
		</div>
	);
}

export default App;

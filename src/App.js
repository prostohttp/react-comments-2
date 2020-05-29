import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CommentsList} from "./components/comments-list";
import FormComponent from "./components/form";

function App() {
	const [dataState, setDataState] = useState(JSON.parse(localStorage.getItem("comments")) || []);
	return (
		<div className="App container p-3">
			<CommentsList data={dataState} setData={setDataState}/>
			<FormComponent data={dataState} setData={setDataState}/>
		</div>
	);
}

export default App;

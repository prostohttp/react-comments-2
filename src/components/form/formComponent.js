import React, {useRef, useEffect, useCallback} from 'react';
import {Button, Form} from "react-bootstrap";

const FormComponent = ({data, setData}) => {
	const name = useRef(null);
	const text = useRef(null);
	const checkValidationFields = (...fields) => fields.every(field => field.length);

	const submitHandler = (e) => {
		e.preventDefault();
		if (checkValidationFields(name.current.value, text.current.value)) {
			setData(data => [...data, {
				name: name.current.value,
				date: new Date().toLocaleString(),
				text: text.current.value
			}]);
		} else {
			alert("Заполните обязательные поля!");
		}
	}

	const saveToLocaleStorage = (data) => {
		localStorage.setItem("comments", JSON.stringify(data));
	}

	useEffect(()=> {
		saveToLocaleStorage(data);
	}, [data])


	return (
		<Form className="p-3">
			<h1 className="text-center">Напишите комментарий</h1>
			<Form.Group>
				<Form.Label>Имя*</Form.Label>
				<Form.Control type="text" placeholder="Ваше имя*" required ref={name}/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Комментарий*</Form.Label>
				<Form.Control as="textarea" rows="3" placeholder="Комментарий*" required ref={text}/>
			</Form.Group>
			<Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
				Отправить
			</Button>
		</Form>
	);
};

export default FormComponent;

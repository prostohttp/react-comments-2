import React, {useEffect, useRef, useState} from 'react';
import {Button, Form} from "react-bootstrap";

const FormComponent = ({data, setData}) => {
	const [nameField, setNameField] = useState("");
	const [textField, setTextField] = useState("");
	const focusField = useRef(null);

	const checkValidationFields = (...fields) => fields.every(field => field.length);

	const submitHandler = (e) => {
		e.preventDefault();
		if (checkValidationFields(nameField, textField)) {
			setData(data => [...data, {
				name: nameField,
				date: new Date().toLocaleString(),
				text: textField
			}]);
			setNameField("");
			setTextField("");
			focusField.current.focus();
		} else {
			alert("Заполните обязательные поля!");
		}
	}

	const saveToLocaleStorage = (data) => {
		localStorage.setItem("comments", JSON.stringify(data));
	}

	useEffect(() => {
		saveToLocaleStorage(data);
	}, [data])

	const changeHandlerName = (e) => {
		setNameField(e.target.value)
	}

	const changeHandlerText = (e) => {
		setTextField(e.target.value)
	}

	return (
		<Form className="p-3" onSubmit={(e) => submitHandler(e)}>
			<h1 className="text-center">Напишите комментарий</h1>
			<Form.Group>
				<Form.Label>Имя*</Form.Label>
				<Form.Control
					type="text"
					placeholder="Ваше имя*"
					ref={focusField}
					onChange={(e) => changeHandlerName(e)}
					value={nameField}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Комментарий*</Form.Label>
				<Form.Control
					as="textarea"
					rows="3"
					placeholder="Комментарий*"
					onChange={(e) => changeHandlerText(e)}
					value={textField}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Отправить
			</Button>
		</Form>
	);
};

export default FormComponent;

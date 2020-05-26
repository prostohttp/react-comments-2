import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Button, Card} from "react-bootstrap";
import {CommentsCount} from ".";
import "./style.css";

const CommentsList = ({data}) => {


	const commentsList = data.map(({name, date, text}) => (
		<div className="container p-3" key={date}>
			<Card>
				<Button variant="danger" className="delete-button">
					<FontAwesomeIcon icon={faTrash}/>
				</Button>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
					<Card.Text>{text}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	))
	return (
		<>
			<CommentsCount/>
			{commentsList}
		</>
	);
};

export default CommentsList;

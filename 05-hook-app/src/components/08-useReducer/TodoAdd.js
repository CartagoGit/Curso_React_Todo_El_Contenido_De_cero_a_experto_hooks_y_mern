import React from "react";
import { useForm } from "../../hooks/useForm";
import { PropTypes } from "prop-types";

export const TodoAdd = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, reset] = useForm({
		description: ""
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length < 1) return;
		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		};
		handleAddTodo(newTodo);
		reset();

	};

	return (
		<>
			<h4 className='text-center'>Agregar TODO</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='description'
					className='form-control'
					placeholder='Aprender ...'
					autoComplete='off'
					onChange={handleInputChange}
					value={description}
				/>
				<button type='submit' className='btn btn-outline-primary mt-1 col-12'>
					Agregar
				</button>
			</form>
		</>
	);
};

TodoAdd.propTypes = {
	handleAddTodo: PropTypes.func.isRequired
};

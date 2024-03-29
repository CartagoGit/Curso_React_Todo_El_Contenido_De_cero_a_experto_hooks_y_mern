import { useState } from "react";

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = () => {
		setValues((values) => (values = initialState));
	};

	const handleChangeValue = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value
		});
	};

	return [values, handleChangeValue, reset];
};

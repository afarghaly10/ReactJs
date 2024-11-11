import {useState} from 'react'

const useInput = (defaultValue, validationFn) => {
  const [formData, setFormData] = useState(defaultValue);
	const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(formData);

  const handleFormChange = (event) => {
		setFormData(event.target.value);
		setDidEdit(false);
	};

	const handleInputBlur = () => {
		setDidEdit(true);
	};

    return { value: formData, handleFormChange, handleInputBlur, hasError: !valueIsValid && didEdit };
}

export {useInput}

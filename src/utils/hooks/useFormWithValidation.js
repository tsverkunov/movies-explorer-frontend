import { useCallback, useState } from 'react';

export function useFormWithValidation() {

  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const { name, value, validationMessage } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = { name: '', email: '', password: '' },
     newErrors = { name: '', email: '', password: '' },
     newIsValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}

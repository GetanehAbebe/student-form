import { useState, useEffect } from "react";
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    adress: "",
    gender: "",
    course: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    adress: "",
    gender: "",
    course: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    //callback()
  };

  useEffect(() => {
    for (const key in errors) {
      console.log("sdfsdfsd", errors[key]);
      if (!!errors[key].length) return;
    }
    isSubmitting && callback();
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;

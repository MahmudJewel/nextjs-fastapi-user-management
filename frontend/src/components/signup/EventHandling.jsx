import { useState, useEffect } from "react";
import ValidateText from "./ValidateText";

const EventHandling = () => {
  const [values, setValues] = useState({
    first_name:"",
    last_name:"",
    email: "",
    password: "",
    password2:"",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log('you entered ', values)
  };
  const clickOnsubmit = (e) => {
    e.preventDefault();
    // console.log("your submission : ", values);
    setErrors(ValidateText(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        submitForm();
      }
    },
    [errors]
  );
  return { handleChange, clickOnsubmit, values, errors };
};

export default EventHandling;
"use client"
import { useState, useEffect } from "react";
import ValidateText from "./ValidateText";
import { postMethod } from '@/services/apiService';
import { useRouter } from 'next/navigation'

const EventHandling = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // console.log('you entered ', values)
  };
  const clickOnsubmit = async (e) => {
    e.preventDefault();
    // console.log("your submission : ", values);
    setErrors(ValidateText(values));
    setIsSubmitting(true);
    console.log('Errors => ', errors, Object.keys(errors).length)
  };

  const fetchData = async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const data = {
        "first_name": values.first_name,
        "last_name": values.last_name,
        "email": values.email,
        "password": values.password
      }
      const response = await postMethod('users/', JSON.stringify(data));
      console.log('response ===> ', response);
    }
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        // fetchData();
        // router.push('/');
      }
    },
    [errors]
  );
  return { handleChange, clickOnsubmit, values, errors, isSubmitting };
};

export default EventHandling;
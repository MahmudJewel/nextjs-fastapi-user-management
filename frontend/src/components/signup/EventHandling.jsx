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
    console.log('Errors => ', isSubmitting)
  };

  const fetchData = async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const data = {
        "first_name": values.first_name,
        "last_name": values.last_name,
        "email": values.email,
        "password": values.password
      }
      try {
        const response = await postMethod('users/', JSON.stringify(data));
        console.log('response from try ===> ', response);
        // exist user error 
        if(response.detail){
          setErrors(response)
          // console.log('user exists')
        }
        else{
          router.push('/login');
        }
      }
      catch (e) {
        console.log('error ',e)
      }
    }
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        fetchData();
        // console.log('errors ==> ', errors)
        // router.push('/login');
      }
    },
    [errors]
  );
  return { handleChange, clickOnsubmit, values, errors, isSubmitting };
};

export default EventHandling;
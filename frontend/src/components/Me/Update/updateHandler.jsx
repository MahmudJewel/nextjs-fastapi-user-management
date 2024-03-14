"use client";
import { patchMethod } from '@/services/apiService';
import { useState, useEffect } from 'react'

function UpdateHandler(user) {
    const [values, setValues] = useState({
        first_name: user.first_name,
        last_name: user.last_name
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        // console.log('you entered ', values)
    }

    const clickOnsubmit=(e)=> {
        e.preventDefault();
        if(!errors){
            setIsSubmitted(true);
            fetchData()
        }
        console.log('clicked')
    }

    const fetchData = async () => {
        const response = await patchMethod(`users/${user.id}/`, JSON.stringify(values))
        // console.log('updated response =========> ', response)
        // console.log(`users/${user.id}/`)
    }


    // useEffect(() => {
    //     console.log('Updated values:', values);
    // }, [values]); // Log the updated values whenever `values` changes

    return { handleChange,clickOnsubmit, values,isSubmitted, errors };
}

export default UpdateHandler
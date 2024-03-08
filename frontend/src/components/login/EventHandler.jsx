"use client"
import { useState, useEffect } from "react";
import apiService from '@/services/apiService';
import { useRouter } from 'next/navigation'
import { handleLogin } from "@/lib/actions";

const EventHandler = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [unauthorized, setUnauthorized] = useState(false);
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
        fetchData()
        setIsSubmitted(true);
    };

    const fetchData = async () => {
        const response = await apiService.post('login/', JSON.stringify(values));
        console.log('response ===> ', response);
        if (response.access_token) {
            // handleLogin(response.user.pk, response.access, response.refresh);
            handleLogin(response.access);
            router.push('/')
        } else {
            // setErrors(response.non_field_errors);
            console.log('Errors of login ==>');
        }
    }

    //   useEffect(
    //     () => {
    //       if (isSubmitted) {
    //         fetchData();
    //         console.log('useEffect login')
    //         // router.push('/');
    //       }
    //     },
    //     []
    //   );
    return { handleChange, clickOnsubmit, values, isSubmitted, unauthorized };
};

export default EventHandler;
"use client"
import { useState, useEffect } from "react";
import { postMethod } from "@/services/apiService";
import { useRouter } from "next/navigation";

const EventHandler = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState(null);
    const router = useRouter()

    const handleChange = (e) => {
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
    };

    const fetchData = async () => {
        const response = await postMethod('login/', JSON.stringify(values));

        if (response.access_token) {
            const tkn = await handleLogin(response.access_token);
            router.push('/me')
        } else {
            setErrors(response)
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
    return { handleChange, clickOnsubmit, values, errors };
};

export default EventHandler;
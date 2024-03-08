"use client"

import { resetAuthCookies } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

function page() {
    const router = useRouter()
    useEffect(
        () => {
            resetAuthCookies()
            router.push('/')
        },
        []
    );

    return (
        <div className="text-center">loading....</div>
    )
}

export default page
import { getAccessToken } from "@/lib/actions";

export async function getMethod(url) {
    const accessToken = await getAccessToken()
    // ========================== ok =========================
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         Authorization:'Bearer ' + accessToken
    //     }
    // })
    // if (!res.ok) {
    //     throw new Error('failed to fetch data')
    // }
    // return res.json()
    return new Promise((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: accessToken ? 'Bearer ' + accessToken : null,
            }
        })
            .then(response => response.json())
            .then((json) => {
                console.log('Response:', json);

                resolve(json);
            })
            .catch((error => {
                reject(error);
            }))
    })
}

export async function postMethod(url, data) {
    const accessToken = await getAccessToken()
    return new Promise((resolve, reject) => {
        // fetch(`http://127.0.0.1:8000/${url}`, {
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: accessToken ? 'Bearer ' + accessToken : null,
            }
        })
            .then(response => response.json())
            .then((json) => {
                // console.log('Response:', json);

                resolve(json);
            })
            .catch((error => {
                reject(error);
            }))
    })

}

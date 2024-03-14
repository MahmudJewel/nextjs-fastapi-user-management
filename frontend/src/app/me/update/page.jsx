import UpdateUser from '@/components/Me/Update/UpdateUser'
import { getAccessToken } from '@/lib/actions'
import { getMethod } from '@/services/apiService'

async function Update() {
    const user =  await getMethod('users/me/')
    return (
        <>
            <UpdateUser user={user}/>
        </>
    )
}

export default Update
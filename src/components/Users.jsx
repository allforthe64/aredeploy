import { useState, useEffect } from "react"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import useRefreshToken from '../hooks/useRefreshToken'
import { useNavigate, useLocation } from 'react-router-dom'

export const Users = () => {
  
    const [users, setUsers] = useState()
    const refresh = useRefreshToken()

    const axiosPrivate = useAxiosPrivate()

    const navigate = useNavigate()
    const location = useLocation()

    //get all users from backend when component mounts
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/admin', {
                    signal: controller.signal
                })
                console.log(response.data)
                isMounted && setUsers(response.data)
            } catch (err) {
                console.log(err)
                navigate('/login', { state: { from: location }, replace: true})
            }
        }

        getUsers()

        //unmount component and cancel any pending functions or requests
        return () => {
            isMounted = false
            controller.abort()
        }

    }, [])
   
    return (
    <div>
        <h2>Users list:</h2>
        {users?.length ? (
            <ul>
                {users.map((user, i) => <li key={i}>{user?.username}</li>)}
            </ul>
        )
            : <p>No users to display</p>
        }
        <button onClick={() => refresh()}>Refresh Token</button>
        <br />
    </div>
  )
}

import { useRef, useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'

import {Link, useNavigate, useLocation} from 'react-router-dom'

import axios from '../api/axios'
const LOGIN_URL = '/login'

export const Login = () => {

    const navigate = useNavigate() // establish routing values
    const location = useLocation()
    const from = '/admin'

    //get the auth context/initialize refs and state
    const { setAuth, persist, setPersist } = useAuth()
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')

    //focus on the username input field
    useEffect(() => {
        userRef.current.focus()
    }, [])

    //empty out error messages 
    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    //toggle the persist login function
    const togglePersist = () => {
        setPersist(prev => !prev)
    }

    //set persist 
    useEffect(() => {
        localStorage.setItem('persist', persist)
    }, [persist])

    //submit the form
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        //try to make login request to backend
        try {
            
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data))

            //take data from response and put it into the auth object
            const accessToken = response?.data?.accessToken
            const region = response?.data?.region
            setAuth({ user, pwd, region, accessToken })
            
            //clear out form
            setUser('')
            setPwd('')

            //navigate to admin page
            navigate(from, {replace: true})
        } catch(err) {
            console.log(err)
            //capture errors and display them
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus()
        }
    }

  return (
    <section className='py-20 flex justify-center'>
        <div className='bg-neutral-200 border-2 border-black rounded-2xl w-[60%] py-10'>
            <h1 className='text-6xl font-bold my-10'>Rep Login</h1>
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
            <form className='flex flex-col items-center' onSubmit={handleSubmit}> 
                <input ref={userRef} type={'text'} placeholder='username' 
                autoComplete='off'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                className='border-b bg-transparent border-black text-xl w-[50%] mb-10 pl-2 py-px focus:outline-none focus:bg-white'/>
                <input type={'password'} placeholder='password' 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                className='border-b bg-transparent border-black text-xl w-[50%] pl-2 py-px focus:outline-none focus:bg-white mb-12'/>
                <button type='submit' className='text text-2xl orange orange-border mt-4 px-6 rounded-lg orange-button transition-color ease-in-out duration-200'>Login</button>
                <div className='w-6/12 flex justify-start mt-4'>
                    <input type={'checkbox'}
                        id={'persist'}
                        onChange={togglePersist}
                        checked={persist} className='w-[18px] h-[18px]'/>
                    <label htmlFor='persist' className='leading-4 ml-2'>Trust This Device</label>
                </div>
            </form>
        </div>  
    </section>
  )
}

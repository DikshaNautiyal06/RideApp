import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Redirect to login if no token
        if (!token) {
            navigate('/captain-login')
            return
        }

        // Fetch captain profile
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.status === 200) {
                    setCaptain(response.data.captain)
                }
            })
            .catch(err => {
                console.error('Error fetching captain profile:', err.response?.data || err.message)
                localStorage.removeItem('token')
                navigate('/captain-login')
            })
            .finally(() => {
                setIsLoading(false) // Ensure loading state is updated
            })
    }, [token, navigate, setCaptain])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default CaptainProtectWrapper

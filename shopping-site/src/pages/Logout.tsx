import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('user')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    localStorage.removeItem('email')
    localStorage.removeItem('accountUsername')
    localStorage.removeItem('accountPassword')
    localStorage.removeItem('accountEmail')
    navigate('/login')
  }, [navigate])

  return null
}
export default Logout
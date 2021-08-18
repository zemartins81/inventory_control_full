import { useEffect, useState } from 'react'
import httpService from '../../services/httpService'
import history from '../../services/history'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      token = token.replace(/"/g, '')
      httpService.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
      setLoading(false)
      history.push('/produtos')
    }
    setLoading(false)
  }, [])

  async function handleLogin(email, password) {
    try {
      const { data } = await httpService
        .post('http://localhost:3001/auth/authenticate', {
          email,
          password,
        })
        .then((response) => response)
        .catch((error) => error)
      if (!data) {
        alert('Usuário ou senha incorretos!')
        return
      }
      const { token, user } = data

      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('user', JSON.stringify(user))
      httpService.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
      setLoading(false)
      history.push('/produtos')
    } catch (e) {
      alert(e.message)
    }
  }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    httpService.defaults.headers.Authorization = undefined

    setAuthenticated(false)
    history.push('/')
  }

  return { loading, authenticated, handleLogin, handleLogout }
}

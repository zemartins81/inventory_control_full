import { useEffect, useState } from 'react'
import api from '../../services/httpService'
import history from '../../services/history'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }
    setLoading(false)
  }, [])

  async function handleLogin(email, password) {
    try {
      const { data } = await api
        .post('/auth/authenticate', {
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
      api.defaults.headers.Authorization = `Bearer ${token}`
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
    api.defaults.headers.Authorization = undefined

    setAuthenticated(false)
    history.push('/')
  }

  return { loading, authenticated, handleLogin, handleLogout }
}

import { useState } from 'react'
import { createContext, ReactNode, useEffect } from 'react'
import api from '../services/apí'

type User = {
  id: String
  name: String
  login: String
  avatar_url: String
}

type AuthContextData = {
  user: User | null
  singInUrl: String
  LogOut: () => void
}

type AuthProvider = {
  children: ReactNode
}

type AuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

// const AuthContext = createContext({} as AuthContextData)
export const AuthContext = createContext(null)

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>()

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=cf9fd61483abffe374e6&redirect_uri=https://nlw-hea.netlify.app/ `

  async function singIn(gitHubCode: string) {
    const response = await api.post<AuthResponse>('/authenticate', {
      code: gitHubCode,
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }

  function signOut() {
    setUser(null)

    localStorage.removeItem('@dowhile:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`

      api.get<User>('/profile').then((response) => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href
    const hasGitHubCode = url.includes('?code=')

    if (hasGitHubCode) {
      const [urlWhithout, gitHubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWhithout)

      singIn(gitHubCode)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signInUrl, signOut, user }}>
      {props.children}
    </AuthContext.Provider>
  )
}

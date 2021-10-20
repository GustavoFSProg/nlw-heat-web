import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useEffect } from 'react'
import api from '../../services/apí'

type AuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=cf9fd61483abffe374e6&redirect_uri=http://localhost:3000 `

  async function singIn(gitHubCode: string) {
    const response = await api.post<AuthResponse>('/authenticate', {
      code: gitHubCode,
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    console.log(user)
  }

  useEffect(() => {
    const url = window.location.href
    const hasGitHubCode = url.includes('?code=')

    if (hasGitHubCode) {
      const [urlWhithout, gitHubCode] = url.split('?code=')

      // console.log(urlWhithout, gitHubCode)

      window.history.pushState({}, '', urlWhithout)

      singIn(gitHubCode)
    }
  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre ecompartilhe sua Mensagem</strong>
      <a href={signInUrl} className={styles.singInWhitGitHub}>
        <VscGithubInverted size={24} />
        <span style={{ marginLeft: '8px' }}>Entrar com Github</span>
      </a>
    </div>
  )
}

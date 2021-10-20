import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext)

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua Mensagem</strong>
      <a href={signInUrl} className={styles.singInWhitGitHub}>
        <VscGithubInverted size={24} />
        <span style={{ marginLeft: '8px' }}>Entrar com Github</span>
      </a>
    </div>
  )
}

import styles from './styles.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'

export function LoginBox() {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre ecompartilhe sua Mensagem</strong>
      <a href="" className={styles.singInWhitGitHub}>
        <VscGithubInverted size={24} />
        <span style={{ marginLeft: '8px' }}>Entrar com Github</span>
      </a>
    </div>
  )
}

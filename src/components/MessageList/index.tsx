import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="logo" style={{ paddingBottom: '80px' }} />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Texto da mensagem com algoritmosTexto da mensagem com algoritmos Texto da mensagem com
            algoritmosTexto da mensagem com algoritmos Texto da mensagem com algoritmos
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/gustavoFSprog.png" alt=" Gustavo Sohne" />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Texto da mensagem com algoritmosTexto da mensagem com algoritmos Texto da mensagem com
            algoritmosTexto da mensagem com algoritmos Texto da mensagem com algoritmos
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/gustavoFSprog.png" alt=" Gustavo Sohne" />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            {' '}
            Texto da mensagem com algoritmosTexto da mensagem com algoritmos Texto da mensagem com
            algoritmosTexto da mensagem com algoritmos Texto da mensagem com algoritmos
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/gustavoFSprog.png" alt=" Gustavo Sohne" />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

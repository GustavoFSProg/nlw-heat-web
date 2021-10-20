import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import api from '../../services/apí'
import { useEffect, useState } from 'react'

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  async function getAll() {
    const { data } = await api.get<Message[]>('/messages/last3')

    setMessages(data)
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="logo" style={{ paddingBottom: '80px' }} />

      {messages.map((items) => {
        return (
          <ul key={items.id} className={styles.messageList}>
            <li className={styles.message}>
              <p className={styles.messageContent}>{items.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src="https://github.com/gustavoFSprog.png" alt={items.user.name} />
                </div>
                <span>{items.user.name}</span>
              </div>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

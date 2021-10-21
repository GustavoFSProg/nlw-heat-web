import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'
import api from '../../services/apí'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

type Message = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

const messagesQueue: Message[] = []

const socket = io('https://nlw-heat-api.herokuapp.com/')
// const socket = io('http://localhost:8000')

socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage)
})

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  async function getAll() {
    const { data } = await api.get<Message[]>('/messages/last3')

    setMessages(data)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prevState) => [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    getAll()
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img className={styles.logoImage} src={logoImg} alt="logo" />

      {messages.map((items) => {
        return (
          <ul key={items.id} className={styles.messageList}>
            <li className={styles.message}>
              <p className={styles.messageContent}>{items.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src="https://github.com/gustavoFSprog.png" alt={items.user.name} />
                </div>
                <span style={{ width: '200px', marginLeft: '-25px' }}>{items.user.name}</span>
              </div>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

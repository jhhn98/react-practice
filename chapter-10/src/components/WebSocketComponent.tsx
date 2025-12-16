import { useEffect, useState } from 'react'

export default function WebSocketComponent() {
    const [messages, setMessages] = useState<string[]>([])
    const [message, setMessage] = useState<string>('')
    const [socket, setSocket] = useState<WebSocket | null>(null)
    useEffect(() => {// 마운트 시 웹소켓 연결 생성
        const socket = new WebSocket('wss://echo.websocket.org')
        setSocket(socket)
        socket.onmessage = (event) => {
            setMessages((prev) => [...prev, `Server: ${event.data}`])
        }
        socket.onerror = (error) => {
            console.error('WebSocket Error: ', error)
        }
        socket.onclose = () => {
            console.log('WebSocket connection closed')
        }
        return () => {
            socket.close()
        }
    }, [])
    const handleSendMessage = () => {
        if (socket && socket.readyState === WebSocket.OPEN && message) {
            socket.send(message)
            setMessages((prev) => [...prev, `Me: ${message}`])
            setMessage('')
        
        } else {
            alert('The connection to the server was lost')
        }
    }
    return (
        <>
            <div>
                {messages.map((msg, index) => (
                    <div key={index} className='message'>{msg}</div>
                ))}
            </div>
            <div>
                <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Please enter message'/>
                <button onClick={handleSendMessage}>Submit</button>
            </div>
        </>
    )
}
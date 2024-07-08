import React, {useEffect, useState} from 'react';
import './App.css';
import s from './app.module.css'
import {io} from "socket.io-client";




const newSocket = io('http://localhost:3009');

function App() {


    useEffect(() => {
        newSocket.on('initial messages', (messages:any) => {
            setMessages(messages)
        })
    }, []);


    const [messages, setMessages] = useState<Array<any>>([]);
    const [message, setMessage] = useState('');




    return (
        <div className="App">
            {
                messages.map((message) => (
                    <div className={s.message} key={message.id}>
                        <div>
                            <div className={s.message__username}>{message.user.name}</div>
                            {message.message}
                        </div>
                    </div>
                ))
            }
            <div className={s.inputGroup}>
        <textarea
            className={s.input}
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
        />
                <button className={s.buttons} onClick={() => newSocket.emit('message', message)}>отправить</button>
            </div>
        </div>
    );
}

export default App;






// useEffect(() => {
//     newSocket.on('connect', () => {
//         console.log('Connected to the server');
//     });
//
//     newSocket.on('message', (message) => {
//         console.log('Received message:', message);
//         setMessages((prevMessages) => [...prevMessages, { message, id: Date.now().toString(), user: { id: 'server', name: 'Server' } }]);
//     });
//
//     newSocket.on('disconnect', () => {
//         console.log('Disconnected from the server');
//     });
//
//     return () => {
//         newSocket.off('connect');
//         newSocket.off('message');
//         newSocket.off('disconnect');
//     };
// }, []);

// const handleSendMessage = () => {
//     if (messag.trim()) {
//         newSocket.emit('message', messag);
//         setMessages([...messages, { message: messag, id: Date.now().toString(), user: { id: 'user', name: 'You' } }]);
//         setMessag('');
//     }
// };

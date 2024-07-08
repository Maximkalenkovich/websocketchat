import React, {useState} from 'react';
import './App.css';
import s from './app.module.css'

const arrMessage = [
    {message: "test", id: '4564',user:{id:'234234we', name:"Dima"}},
    {message: "hello pedik", id: 'wsfwe32',user:{id:'wefwe43', name:"mAX"}}

]

function App() {
  const [messages,setMessages] = useState(arrMessage)


    return (
        <div className="App">
            {
                messages.map((message) => {
                    return (
                        <div className={s.message} key={message.id}>
                            <div>
                                <div className={s.message__username}>{message.user.name}</div>
                                {message.message}
                            </div>
                        </div>
                    )
                })
            }
            <div className={s.inputGroup}>
                <textarea  className={s.input}/>
                <button className={s.buttons}>отправить</button>
            </div>
        </div>
    );
}

export default App;

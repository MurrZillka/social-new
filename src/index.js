import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postData = [
    {id: 1, postMessage: 'Привет! Как дела?', likesCount: 12},
    {id: 2, postMessage: 'Я учу React', likesCount: 22},
    {id: 3, postMessage: 'А я уже выучил React', likesCount: 3},
    {id: 4, postMessage: 'Ты пойдешь бухать?', likesCount: 1},
    {id: 5, postMessage: 'Чтобы жить', likesCount: 0},
]

const dialogsData = [
    {id: 1, name: 'Влад'},
    {id: 2, name: 'Димыч'},
    {id: 3, name: 'Валера'},
    {id: 4, name: 'Слон'},
    {id: 5, name: 'Люська'},
    {id: 6, name: 'Ирка'},
    {id: 7, name: 'Королев'},
    {id: 8, name: 'Королева'},
]

const messagesData = [
    {id: 1, message: "Привет, что делаешь?"},
    {id: 2, message: "Фигней страдаю"},
    {id: 3, message: "Я уже выучил React, получаю кучу денег"},
    {id: 4, message: "Меня никто не ждет"},
    {id: 5, message: "А наконец-то сделала это!"},
    {id: 6, message: "Что именно?"},
    {id: 7, message: "Не скажу, то с чем ты не справился"},
    {id: 8, message: "Ну и дура((("},
]

ReactDOM.render(
    <React.StrictMode>
        <App postData={postData}
             dialogsData={dialogsData}
             messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

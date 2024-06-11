import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';
import s from './InputTodo.module.css';

export default function InputTodo() {
    const dispatch = useDispatch();
    const [todolist, setTodolist] = useState({ id: 0, text: "" });
    const [currentTime, setCurrentTime] = useState(new Date());

    function handleText(e) {
        setTodolist({ text: e.target.value });
    }

    function onReset() {
        setTodolist({ text: "" });
    }

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);  // Clean up the interval on component unmount
    }, []);

    const formattedDate = currentTime.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    const formattedTime = currentTime.toLocaleTimeString('ko-KR');

    return (
        <div className={s.InputTodo}>
            <div className={s['date-time']}>
                <div className={s.date}>{formattedDate}</div>
                <div className={s.time}>{formattedTime}</div>
            </div>
            <div className={s['input-container']}>
                <input className={s.textbar} type="text" value={todolist.text} onChange={handleText}></input>
                <button className={s.submitbutton} onClick={(e) => {
                    e.preventDefault();
                    if (todolist.text !== "") {
                        dispatch(add(todolist.text));
                    } else {
                        alert("할 일을 입력해주세요!");
                    }
                    onReset();
                }}>+</button>
            </div>
        </div>
    );
}

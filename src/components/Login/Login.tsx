import React, {useRef} from "react";
import './Login.css';

const Login = () => {
    const login = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        
        console.log(login.current?.value, 'login')
    }

    return (
        <div className="login-form">
            <h2 className="login-form__title">Добро пожаловать!</h2>
            <p className="login-form__subtitle">Для входа в приложение укажите, пожалуйста, своё имя.</p>
            <form className="form" name="login" onSubmit={submitHandler}>
                <input className="form__input" ref={login} type="text" name="login" placeholder="Имя"/>
                <button className="form__button" type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './Login.css';

const Login = () => {
    let history = useHistory();
    const [login, setLogin] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setLogin(inputValue);

        if (inputValue.length < 2) {
            setHasError(true);
            setIsButtonDisabled(true);
        } else {
            setHasError(false);
            setIsButtonDisabled(false);
        }
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (!hasError && login) {
            history.push('/counting')
        }
        console.log(login, 'login');
        setLogin('');
    }

    return (
        <div className="login-form">
            <h2 className="login-form__title">Добро пожаловать!</h2>
            <p className="login-form__subtitle">Для входа в приложение укажите, пожалуйста, своё имя.</p>
            <form className="form" name="login" onSubmit={submitHandler}>
                <div className="error__container">
                    {hasError && <span className="form__error">Имя должно быть длинее 2х символов.</span>}
                </div>
                <input className="form__input" onChange={e => onChangeHandler(e)} value={login} type="text" name="login" placeholder="Имя"/>
                <button className="form__button" type="submit" disabled={isButtonDisabled}>Войти</button>
            </form>
        </div>
    )
}

export default Login;
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import styles from './Login.module.css';

interface ILoginProps {
    setUserName: (login: string) => void
}

const Login: React.FC<ILoginProps> = ({ setUserName }) => {
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
            setUserName(login);
            history.push('/counting');
        }
        console.log(login, 'login');
        setLogin('');
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Добро пожаловать!</h2>
            <p className={styles.subtitle}>Для входа в приложение укажите, пожалуйста, своё имя.</p>
            <form className={styles.form} name="login" onSubmit={submitHandler}>
                <div className={styles.errorContainer}>
                    {hasError && <span className={styles.error}>Имя должно быть длинее 2х символов.</span>}
                </div>
                <input className={styles.input} onChange={e => onChangeHandler(e)} value={login} type="text" name="login" placeholder="Имя"/>
                <button className={styles.button} type="submit" disabled={isButtonDisabled}>Войти</button>
            </form>
        </div>
    )
}

export default Login;
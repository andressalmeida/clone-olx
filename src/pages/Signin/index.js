
import {PageArea} from './styled'
import { PageContainer, PageTitle } from "../../components/MainComponent"
import { useState } from 'react'
import useApi from '../../helpers/OlxApi'
import { doLogin } from '../../helpers/AuthHandler'

export const Signin = () => {
    const api = useApi();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')


    const handleSubmit = async(e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);
        if(json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={handleSubmit}>
                    <label className='area'>
                        <div className='area--title'>E-mail</div>
                        <div className='area--input'>
                            <input className='input--text' type='email' disabled={disabled} />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Senha</div>
                        <div className='area--input'>
                            <input className='input--text' type='password' disabled={disabled} />
                        </div>
                    </label>

                    <label className='area'>
                        <div className='area--title'>Lembrar Senha</div>
                        <div className='area--input'>
                            <input type='checkbox' disabled={disabled}/>
                        </div>
                    </label>

                    <label className='area'>
                    <div className='area--title'></div>
                        <div className='area--input'>
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}
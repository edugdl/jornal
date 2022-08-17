import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import $ from 'jquery'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const logarUsuario = () => {return};
    return (
        <div>
            <Header/>
            <C.Caixa>
                <Campo change={e => setEmail(e.target.value)} id='email' text='Email' placeHolder='Insira aqui seu Email'/>
                <Campo change={e => setSenha(e.target.value)} id='senha' text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Botao acao={()=>{console.log(senha)}} text='Fazer Login' txtRedirect='Caso ainda não possua uma conta ' redirect='/register'/>
            </C.Caixa>
        </div>
    );
}
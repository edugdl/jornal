import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import { useState } from 'react'
import api from '../services/api'

export default function Login() {
    const [_email, setEmail] = useState('');
    const [_senha, setSenha] = useState('');
    
    const logarUsuario = async () => {
        api.post('/usuario/login', {
            email: _email,
            senha: _senha
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <div>
            <Header/>
            <C.Caixa>
                <Campo change={e => setEmail(e.target.value)} id='email' text='Email' placeHolder='Insira aqui seu Email'/>
                <Campo change={e => setSenha(e.target.value)} id='senha' text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Botao acao={logarUsuario} text='Fazer Login' txtRedirect='Caso ainda não possua uma conta ' redirect='/register'/>
            </C.Caixa>
        </div>
    );
}
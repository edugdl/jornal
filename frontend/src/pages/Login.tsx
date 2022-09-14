import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import { useState } from 'react'
import '../services/api'
import api from '../services/api'

type Login = {
  email: string,
  senha: string
}

export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const fetchLogin = async () => {
    const response = await api.post('/usuario/login', {
      email: email,
      senha: senha
    }).then((response) => {
      console.log(response.data)
    })
  }

  const logarUsuario = () => {
    const response = fetchLogin()
    if(response){
      console.log(response)
    }else{
      console.log('login invalido')
    }
  }

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
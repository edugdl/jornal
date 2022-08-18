import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'


export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { data, loading, error } = useFetch('/login')
  
  function logarUsuario(){
    console.log(data)
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
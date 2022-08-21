import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import { useState } from 'react'
import { useAxiosPost } from '../hooks/useAxios'

type Login = {
  email: string,
  senha: string
}

export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  
  const { response, loading, error, execute } = useAxiosPost<Login>({
    url: '/usuario/login',
    requestConfig:{
      body:{
        'email': email,
        'senha': senha
      }
    }
  })


  // const { data, loading, error } = useFetchPost('/login', { email, senha }, gambiarra)
  

  return (
      <div>
          <Header/>
          <C.Caixa>
              <Campo change={e => setEmail(e.target.value)} id='email' text='Email' placeHolder='Insira aqui seu Email'/>
              <Campo change={e => setSenha(e.target.value)} id='senha' text='Senha' placeHolder='Insira aqui sua Senha'/>
              <Botao acao={execute} text='Fazer Login' txtRedirect='Caso ainda não possua uma conta ' redirect='/register'/>
          </C.Caixa>
      </div>
  );
}
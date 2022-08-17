import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import { useState } from 'react'

export default function Login() {
    const [_nome, setNome] = useState('');
    const [_email, setEmail] = useState('');
    const [_senha, setSenha] = useState('');
    const [_dataNascimento, setDataNascimento] = useState('');
    const [_cpf, setCpf] = useState('');
    const [_cep, setCep] = useState('');

    const registrarUsuario = () => {return};

    return (
        <div>
            <Header/>
            <C.Caixa>
                <Campo change={e => setNome(e.target.value)}id='nome' text='Nome' placeHolder='Insira aqui seu Nome Completo'/>
                <Campo change={e => setEmail(e.target.value)}id='email' text='Email' placeHolder='Insira aqui seu Email'/>
                <Campo change={e => setSenha(e.target.value)}id='senha' text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Campo change={e => setDataNascimento(e.target.value)}id='nascimento' text='Data de Nascimento' placeHolder='Insira aqui sua Data de Nascimento'/>
                <Campo change={e => setCpf(e.target.value)}id='cpf' text='CPF' placeHolder='Insira aqui seu Cpf'/>
                <Campo change={e => setCep(e.target.value)}id='cep' text='CEP' placeHolder='Insira aqui seu Cep'/>
                <Botao acao={registrarUsuario} text='Registrar a conta' txtRedirect='Caso ja possua uma conta ' redirect='/login'/>
            </C.Caixa>
        </div>
    );
}
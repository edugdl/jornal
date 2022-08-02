import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'

export default function Login() {
    return (
        <div>
            <Header/>
            <C.Caixa>
                <Campo text='Email' placeHolder='Insira aqui seu Email'/>
                <Campo text='CPF' placeHolder='Insira aqui seu Cpf'/>
                <Campo text='CEP' placeHolder='Insira aqui seu Cep'/>
                <Campo text='Data de Nascimento' placeHolder='Insira aqui sua Data de Nascimento'/>
                <Campo text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Botao text='Registrar a conta' txtRedirect='Caso ja possua uma conta ' redirect='/login'/>
            </C.Caixa>
        </div>
    );
}
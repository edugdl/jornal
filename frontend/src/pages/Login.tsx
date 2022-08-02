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
                <Campo text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Botao text='Fazer Login' txtRedirect='Caso ainda não possua uma conta ' redirect='/register'/>
            </C.Caixa>
        </div>
    );
}
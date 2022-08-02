import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import $ from 'jquery'

export default function Login() {
    const logarUsuario = () => {
        let usuario = {
            email : $("#email").val(),
            senha : $("#senha").val(),
        }
        $.post("http://localhost:8085/usuario/login",usuario,function(retorno){
            if(!retorno){
                alert('E-mail e/ou senha incorreto(s) !')
            }else{
                let primeiro_nome = retorno.nome.split(' ')[0]
                alert('Seja bem-vindo '+primeiro_nome)
                localStorage.setItem('user',JSON.stringify(retorno))
            }
        })
    }
    return (
        <div>
            <Header/>
            <C.Caixa>
                <Campo id='email' text='Email' placeHolder='Insira aqui seu Email'/>
                <Campo id='senha' text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Botao acao={logarUsuario} text='Fazer Login' txtRedirect='Caso ainda não possua uma conta ' redirect='/register'/>
            </C.Caixa>
        </div>
    );
}
import * as C from '../components/CaixaLoginRegister/style'
import Campo from '../components/CamposLoginRegister'
import Botao from '../components/Botao'
import Header from '../components/Header'
import $ from 'jquery'

export default function Login() {
    const registrarUsuario = () => {
        let novoUsuario = {
            email : $("#email").val(),
            cpf : $("#cpf").val(),
            cep : $("#cep").val(),
            nome : $("#nome").val(),
            senha : $("#senha").val(),
            dataNascimento : $("#nascimento").val(),
        }
        $.post("http://localhost:8085/usuario/cadastrar",novoUsuario,function(retorno){
            alert(JSON.stringify(retorno))   
        })
    }
    return (
        <div>
            <Header/>
            <C.Caixa>
                <Campo id='nome' text='Nome' placeHolder='Insira aqui seu Nome Completo'/>
                <Campo id='email' text='Email' placeHolder='Insira aqui seu Email'/>
                <Campo id='cpf' text='CPF' placeHolder='Insira aqui seu Cpf'/>
                <Campo id='cep' text='CEP' placeHolder='Insira aqui seu Cep'/>
                <Campo id='nascimento' text='Data de Nascimento' placeHolder='Insira aqui sua Data de Nascimento'/>
                <Campo id='senha' text='Senha' placeHolder='Insira aqui sua Senha'/>
                <Botao acao={registrarUsuario} text='Registrar a conta' txtRedirect='Caso ja possua uma conta ' redirect='/login'/>
            </C.Caixa>
        </div>
    );
}
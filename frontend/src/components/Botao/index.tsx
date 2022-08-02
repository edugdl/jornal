import * as C from './style'
import $ from 'jquery'

type BotaoProperties = {
    text : string
    txtRedirect : string
    redirect : string
}

const registrarConta = () => {
    let novoUsuario = {
        email : $("#email").val(),
        cpf : $("#cpf").val(),
        cep : $("#cep").val(),
        nome : $("#nome").val(),
        senha : $("#senha").val(),
        nascimento : $("#nascimento").val(),
    }
    $.post("localhost:8085/cadastrarUsuario", novoUsuario)
    .done(function(data) {
        alert( "Data Loaded: " + data );
  });
}

export default function Botao(props : BotaoProperties){
    return(
        <C.container>
            <C.botao onClick={registrarConta}>{props.text}</C.botao>
            <C.txtRedirect>{props.txtRedirect} <C.redirect href={props.redirect}>Clique Aqui!</C.redirect></C.txtRedirect>
        </C.container>
    )
}
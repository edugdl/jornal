import * as C from './style'

type BotaoProperties = {
    text : string
    txtRedirect : string
    redirect : string
}

export default function Botao(props : BotaoProperties){
    return(
        <C.container>
            <C.botao>{props.text}</C.botao>
            <C.txtRedirect>{props.txtRedirect} <C.redirect href={props.redirect}>Clique Aqui!</C.redirect></C.txtRedirect>
        </C.container>
    )
}
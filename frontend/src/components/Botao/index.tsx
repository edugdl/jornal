import * as C from './style'
import React from 'react'

type BotaoProperties = {
    text : string
    txtRedirect : string
    redirect : string
    acao : React.MouseEventHandler
}

export default function Botao(props : BotaoProperties){
    return(
        <C.container>
            <C.botao onClick={props.acao}>{props.text}</C.botao>
            <C.txtRedirect>{props.txtRedirect} <C.redirect href={props.redirect}>Clique Aqui!</C.redirect></C.txtRedirect>
        </C.container>
    )
}
import * as C from './style';

type CampoProps = {
    text: string
    placeHolder : string
    id : string
    change: React.ChangeEventHandler<HTMLInputElement>
}

export default function Campo(props : CampoProps){
    return(
        <div>       
            <C.Titulo>{props.text}</C.Titulo>
            <C.Campo onChange={props.change} id={props.id} placeholder={props.placeHolder}></C.Campo>
        </div>
    )
};
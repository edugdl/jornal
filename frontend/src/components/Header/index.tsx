import * as C from './style';

type SummaryItemProps = {
    text: string
    total: number
}

export default function SummaryItem(props: SummaryItemProps){
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{props.text}</C.HeaderTitle>
            </C.Header>
            <C.Total>R${props.total}</C.Total>
        </C.Container>
        )
};
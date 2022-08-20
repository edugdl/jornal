export default function Home() {
    return (
        <div style ={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <a style={{
                marginTop: '100px',
                textDecoration: 'none',
                color: 'white',
                backgroundColor: 'purple',
                borderRadius: '5px',
            }} href='/register'>Cadastrar</a> <br/>
            <a style={{
                textDecoration: 'none',
                color: 'black',
                backgroundColor: 'orange',
                borderRadius: '5px',
            }} href='/login'>Login</a>
        </div>
    );
}
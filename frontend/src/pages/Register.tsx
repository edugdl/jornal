async function registerUser(){
    const usuario = {
        nome : 'eduardo' ,
        senha : '123' ,
        cep : '11018864989' ,
        dataNascimento : '2005-07-09' ,
        email : 'eduardogdelazari2005@gmail.com' 
    }
    const response = await fetch('http://localhost:8085/registrarUsuario', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
}

export default function Register() {
    // const cep = document.getElementById('cep') as HTMLInputElement;
    // const cep_value = cep.value;
    return(
        <div>
            <div>Crie sua conta</div>
            <input type="text" name="coisa" placeholder="Seu cep" id="cep" />
            <button onClick={registerUser}>clique aqui</button>
        </div>
    );
}
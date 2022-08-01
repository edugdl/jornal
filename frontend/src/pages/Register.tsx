
export default function Register() {

    function getUser(){
        const cep = document.getElementById('cep') as HTMLInputElement;
        const cep_value = cep.value;

        let usuario = {
            nome : 'eduardo' ,
            senha : '123' ,
            cep : '11018864989' ,
            dataNascimento : '2005-07-09' ,
            email : 'eduardogdelazari2005@gmail.com' 
        }

        return fetch(`127.0.0.1:8085/registrarUsuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(usuario)
        })
        .then(()=>{console.log("Usuario registrado com sucesso")})
    }

    return(
        <div>
            <div>Crie sua conta</div>
            <input type="text" name="coisa" placeholder="Seu cep" id="cep" />
            <button onClick={getUser}>clique aqui</button>
        </div>
    );
}
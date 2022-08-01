
export default function Register() {
    
    function getUser(){
        const cep = document.getElementById('cep') as HTMLInputElement;
        const cep_value = cep.value;
        return fetch(`https://viacep.com.br/ws/${cep_value}/json/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div>
            <div>Crie sua conta</div>
            <input type="text" name="coisa" placeholder="Seu cep" id="cep" />
            <button onClick={getUser}>clique aqui</button>
        </div>
    );
}
import './Greetings.css'

function Greetings ({nome, mensagem = "Seja bem-vindo(a)!"}) {
    return(
        <div className="greeting">
            <span className="greeting__eyebrowm">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae dolor reiciendis eos. Mollitia, eos provident! Expedita vitae excepturi ea optio velit error, illo quo, ducimus quibusdam, culpa dignissimos impedit consequuntur.</p>
        </div>

    ); 

}
export default Greetings;
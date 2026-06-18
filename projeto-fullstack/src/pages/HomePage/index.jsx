import './style.css'

export default function HomePage() {
    return(
        <div className='home-page'>
            <h1>Bem-vindo ao sistema de Gerenciamento de Usuários</h1>

            <p>
                Cadastre e veja os usuários listados
            </p>
            <div className='hero-buttons'>
                <a href="/cadastro" className="btn-primary">Começar Cadastro</a>
                <a href="/listar-usuarios" className="btn-secondary">Ver Usuários</a>
            </div>
        </div>
    )
}
import './style.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} Projeto Fullstack Desenvolvido por: Bruno Brandão. Todos os direitos reservados.
                <br />
                SENAI -  Bahia
            </p>
        </footer>
    )
}
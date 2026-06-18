import { useState } from 'react'
import './style.css'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function CadastroPage() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [estaEnviando, setEstaEnviando] = useState(false)
    
    //Limpa os campos do formulario
    function limparCampoDoFormulario() {
        setNome('')
        setEmail('')
        setSenha('')
    }

    async function envioDoFormulario(event) {
        //Evita q a pagina seja recarregada automaticamente
        event.preventDefault();
        setEstaEnviando(true)

        const dadosDoFormulario = {nome, email, senha}
        try {
            //Tenta cadastrar um usuario na API
            const resposta = await api.post('/usuarios', dadosDoFormulario)

            //se der certo
            toast.success(resposta.data.mensagem)
            limparCampoDoFormulario()
        } catch (erro) {
            //se der errado
            const mensagemDoServidor = erro?.response?.data?.mensagem
            toast.erro(mensagemDoServidor)
        } finally {
            //executa dando certo ou errado
            setEstaEnviando(false)
        }
        }

        return (
            <div className='cadastro-page'>
                <form onSubmit={envioDoFormulario}>
                    <div className='grupo-form'>
                        <label htmlFor="campo-nome">Nome</label>
                        <input
                        id='campo-nome'
                        type='text'
                        placeholder='Ex.: Maria Silva'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                        </div>

                        <div className='grupo-form'>
                        <label htmlFor="campo-email">email</label>
                        <input
                        id='campo-email'
                        type='email'
                        placeholder='Ex.: Maria@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>

                <div className='grupo-form'>
                    <label htmlFor="campo-senha">Senha</label>
                    <input
                        id='campo-senha'
                        type='password'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button type='submit' disabled={estaEnviando}>
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
            </form>
        </div>
        )
        }
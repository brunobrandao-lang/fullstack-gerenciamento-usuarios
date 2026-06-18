import './style.css'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function ListaUsuariosPages() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        async function buscarUsuarios() {
            try{
                //se der certo
                const resposta = await api.get('')
                setUsuarios(resposta.data.usuarios || resposta.data)
            } catch{
                //se der errado
                toast.erro('Erro ao buscar usuários')
            }
        }
        buscarUsuarios()
    },[])

    return (
        <div className='lista-usuarios'>
            <h1>Lista de Usuários</h1>

            {
                usuarios.length === 0 ? (
                    <p>Nenhum usuário cadstrado...</p>
                ) : (
                    <table className='tabela-usuarios'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key={usuario.email}>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                )
            }

        </div>
    )
}
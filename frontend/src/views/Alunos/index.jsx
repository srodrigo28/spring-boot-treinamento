import "./alunos.css";
import { useState } from "react"

import { toast } from 'react-toastify';

export function Aluno(){
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [serie, setSerie] = useState('')

    const validarCampos = (e) => {
        e.preventDefault()

        // nome
        if(nome === ""){
            toast("Precisa preencher o campo nome");
        }else if(sexo === "" || sexo === "Selecione sexo"){
            toast("Precisa preencher o campo sexo");
        }else if(serie === "" ){
            toast("Precisa preencher o campo serie");
        }else{
            toast("Parabéns você inseriu com sucesso");
        }
        
    }

    return(
        <div>
            <div className="card mt-5">
                <div className="card-header">
                    <h2>Alunos</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form onSubmit={validarCampos}>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" id="nome" className="form-control" placeholder="nome"
                                    onChange={ e => setNome(e.target.value)} value={nome}
                                    />
                                </div>

                                <div className="col">
                                    <label htmlFor="sexo">Sexo</label>
                                    <select className="form-control" 
                                    id="sexo" value={sexo} onChange={ e => setSexo(e.target.value)}>
                                        <option value="x" selected>Selecione sexo</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                </div>

                                <div className="col">
                                    <label htmlFor="serie">Serie</label>
                                    <input type="text" id="serie" className="form-control" placeholder="serie"
                                    value={serie} onChange={ e => setSerie(e.target.value)} />
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <button type="submit" className="btn btn-outline-success btn-form">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <table className="table table-striped table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th width="80" className="text-center">Código</th>
                                    <th>Nome</th>
                                    <th width="100" className="text-center">Sexo</th>
                                    <th width="100" className="text-center">Série</th>
                                    <th width="200" className="text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">01</td>
                                    <td>Carlos Eduardo</td>
                                    <td>Masculino</td>
                                    <td className="text-center">6º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">02</td>
                                    <td>Daniel Silva</td>
                                    <td>Masculino</td>
                                    <td className="text-center">8º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td >
                                </tr>
                                <tr>
                                    <td className="text-center">03</td>
                                    <td>Roberto Sousa</td>
                                    <td>Masculino</td>
                                    <td className="text-center">9º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">04</td>
                                    <td>Maria Sousa</td>
                                    <td>Feminino</td>
                                    <td className="text-center">9º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">05</td>
                                    <td>Roberto Sousa</td>
                                    <td>Masculino</td>
                                    <td className="text-center">9º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">06</td>
                                    <td>Amada Oliveira</td>
                                    <td>Feminino</td>
                                    <td className="text-center">9º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">07</td>
                                    <td>Stela Nascimento</td>
                                    <td>Feminino</td>
                                    <td className="text-center">9º B</td>
                                    <td className="text-center btn-table">
                                        <div className="btn btn-outline-warning">Editar</div>
                                        <div className="btn btn-outline-danger">Apagar</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
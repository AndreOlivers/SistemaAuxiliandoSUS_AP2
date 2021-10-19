import React, { useState } from 'react';
import instance from '../services/api';

const Home = (props) => {
    const [state, setState] = useState({ usuarios: [] })
    const handleClick = () => {
        instance.get("usuarios").then(res => {

            setState({ usuarios: res.data });
        });
    }

    const handlePost = () => {
        instance.post("usuarios").then(res => {
            setState({ usuarios: res.data });
        })
    }
    return (
        <div>
            <button onClick={handlePost}>aaa</button>
            <input type="button" onClick={handleClick} value="Consultar Usuários" />
            <table>
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Idade
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state.usuarios.map((it, index) => (
                        <React.Fragment key={index}>
                            <tr >
                                <td>
                                    {it.nome}
                                </td>
                                <td>
                                    {it.idade}
                                </td>
                                <td>
                                    {it.email}
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;

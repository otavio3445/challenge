import React, { useState } from 'react';
import '../index.css';

function Perfil() {

    const [enableInput, setenableInput] = useState(true);
    const [btnName, setBtnName] = useState(true);

    const [nome, setnome] = useState('Francisca');
    const [sobreNome, setsobre] = useState('Santos');
    const [idade, setidade] = useState('21');
    const [email, setemail] = useState('fran@gmail.com');

    return (
        <div className="containerPerfil">
            <div className="subcontainerPerfil">
                <div className="sidebar">
                    <div className="imgCandidatoPerfil">
                        <img src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                        <div className="btnVagas" onClick={() => window.location.href = '/vagasecursos'}>
                            Visualizar Vagas e Cursos
                        </div>
                        <div className='cvUpload'>
                            <p>Envie seu CV</p>
                            <input type="file" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className="infoHolder">
                    <div className='inforSubHolder'>
                        <label htmlFor="">Nome: </label>
                        <input type="text" name="" id="" value={nome} disabled={enableInput} onChange={(e) => {
                            setnome(e.target.value)
                        }}/>
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Sobrenome: </label>
                        <input type="text" name="" id="" value={sobreNome} disabled={enableInput} onChange={(e) => {
                            setsobre(e.target.value)
                        }}/>
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Email: </label>
                        <input type="text" name="" id="" value={email} disabled={enableInput} onChange={(e) => {
                            setemail(e.target.value)
                        }}/>
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Idade: </label>
                        <input type="text" name="" id="" value={idade} disabled={enableInput} onChange={(e) => {
                            setidade(e.target.value)
                        }} />
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Área de Interesse: </label>
                        <select disabled={enableInput}>
                            <option id='Front'>Desenvolvimento Fron-end</option>
                            <option id='Back' selected>Desenvolvimento Back-end</option>
                            <option id='Auto'>Automação</option>
                            <option id='UX'>UX Design</option>
                            <option id='Infra'>Infraestrutura</option>
                            <option id='AC'>Agile Coach</option>
                            <option id='SM'>Scrum Master</option>
                        </select>
                    </div>
                    <div className="btnEdit" onClick={() => {
                        setBtnName(!btnName);
                        setenableInput(!enableInput);
                    }}>{btnName ? 'Editar' : 'Salvar'}</div>
                </div>
            </div>
            <div className="backBtn" onClick={() => window.location.href = "/loginCandidato"}>
                Voltar
            </div>
        </div>
    )
}

export default Perfil
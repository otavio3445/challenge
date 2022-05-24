import React, { useState, useRef } from 'react';
import '../index.css';
import { IoTrophySharp } from 'react-icons/io5';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GrDocumentDownload } from 'react-icons/gr';

function PerfilRec() {

    const linkRefGithub = useRef();

    const [enableInput, setenableInput] = useState(true);
    const [btnName, setBtnName] = useState(true);

    const [nome, setnome] = useState('Francisca');
    const [sobreNome, setsobre] = useState('Santos');
    const [idade, setidade] = useState('21');
    const [email, setemail] = useState('fran@gmail.com');

    const [linkGitHub, setlinkGitHub] = useState(false);
    const [linkLinkedin, setlinkLinkedin] = useState(false);
    const [showLink, setshowLink] = useState(true);

    return (
        <div className="containerPerfil">
            <div className="subcontainerPerfil">
                <div className="sidebar">
                    <div className="imgCandidatoPerfil">
                        <img src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                        <div>
                            <a href={require('../Assets/CV.txt')} download="CV.txt" className='downloadCv'>Baixar CV</a>
                            <GrDocumentDownload fontSize="30px" />
                        </div>
                    </div>
                </div>
                <div className="infoHolder">
                    <div className='inforSubHolder'>
                        <label htmlFor="">Nome: </label>
                        <input type="text" name="" id="" value={nome} disabled={enableInput} onChange={(e) => {
                            setnome(e.target.value)
                        }} />
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Sobrenome: </label>
                        <input type="text" name="" id="" value={sobreNome} disabled={enableInput} onChange={(e) => {
                            setsobre(e.target.value)
                        }} />
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Email: </label>
                        <input type="text" name="" id="" value={email} disabled={enableInput} onChange={(e) => {
                            setemail(e.target.value)
                        }} />
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
                    <div className='inforSubHolder'>
                        Nível de conhecimento: <strong>Pleno</strong> <IoTrophySharp color='#949494' />
                    </div>
                    <div className='inforSubHolder'>
                        Links:
                        {showLink === true ?
                            <AiFillGithub fontSize={'35px'} onClick={() => window.open(linkGitHub, '_blank')} />
                            : <input type={'text'} placeholder="Insira o link do Github" onChange={(e) => {
                                setlinkGitHub(e.target.value);
                            }} />
                        }
                        {showLink === true ?
                            <AiFillLinkedin fontSize={'35px'} color='blue' onClick={() => window.open(linkLinkedin, '_blank')} />
                            : <input type={'text'} placeholder="Insira o link do LinkedIn" onChange={(e) => {
                                setlinkLinkedin(e.target.value);
                            }} />
                        }
                    </div>
                    <hr />
                    <div className='inforSubHolder badgeHolder'>
                        <h3 style={{ marginTop: '0' }}>Conquistas na plataforma:</h3>
                        <div>
                            <img src={require('../Assets/badge01.png')} width={'100px'} />
                            <img src={require('../Assets/badge02.png')} width={'100px'} />
                            <img src={require('../Assets/badge03.png')} width={'100px'} />
                        </div>
                    </div>
                    <div className='inforSubHolder badgeHolder'>
                        <h3 style={{ marginTop: '0' }}>Progresso nos cursos:</h3>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className='pProgress' for="file">Javascript Avançado II:</p>
                                <progress id="file" value="32" max="100"> 32% </progress><br />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className='pProgress' for="file">Node + Express.js:</p>
                                <progress id="file" value="82" max="100"> 82% </progress><br />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <p className='pProgress' for="file">Introdução ao Python:</p>
                                <progress id="file" value="95" max="100"> 95% </progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="backBtn" onClick={() => window.location.href = "/login"}>
                Sair
            </div>
        </div>
    )
}

export default PerfilRec
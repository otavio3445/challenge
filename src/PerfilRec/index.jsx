import React from 'react';
import '../index.css';
import { AiFillStar, AiOutlineStar, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GrDocumentDownload } from 'react-icons/gr';
import { useLocation } from 'react-router';

function PerfilRec() {

    const location = useLocation();

    const validateConhecimento = () => {
        switch (location.state.user.levelUser) {
            case 1:
                return <div><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></div>
            case 2:
                return <div><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></div>
            case 3:
                return <div><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /></div>
            default:
                return <div><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /></div>
        }
    }

    console.log(location.state);
    return (
        <div className="containerPerfil">
            <div className="subcontainerPerfil">
                <div className="sidebar">
                    <div className="imgCandidatoPerfil">
                        <img alt='' src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                        <div>
                            <a href={require('../Assets/CV.txt')} download="CV.txt" className='downloadCv'>Baixar CV</a>
                            <GrDocumentDownload fontSize="30px" />
                        </div>
                    </div>
                </div>
                <div className="infoHolder">
                    <div className='inforSubHolder'>
                        <label htmlFor="">Nome: </label>
                        <input type="text" name="" id="" value={location.state.user.name} disabled={true} />
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Email: </label>
                        <input type="text" name="" id="" value={location.state.user.email} disabled={true} />
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Data de Nascimento: </label>
                        <input type="text" name="" id="" value={location.state.user.age} disabled={true} />
                    </div>
                    <div className='inforSubHolder'>
                        <label htmlFor="">Área de Interesse: </label>
                        <select>
                            {location.state.user.interesses.map(el=> <option>{el}</option>)}
                        </select>
                    </div>
                    <div className='inforSubHolder'>
                        Nível de conhecimento:
                        {validateConhecimento()}
                    </div>
                    <div className='inforSubHolder'>
                        Links:
                            <AiFillGithub fontSize={'35px'} onClick={() => window.open(location.state.user.github, '_blank')} />
                            <AiFillLinkedin fontSize={'35px'} color='blue' onClick={() => window.open(location.state.user.linkedin, '_blank')} />
                    </div>
                    <hr />
                    <div className='inforSubHolder badgeHolder'>
                        <h3 style={{ marginTop: '0' }}>Conquistas na plataforma:</h3>
                        <div>
                            <img alt='' src={require('../Assets/badge01.png')} width={'100px'} />
                            <img alt='' src={require('../Assets/badge02.png')} width={'100px'} />
                            <img alt='' src={require('../Assets/badge03.png')} width={'100px'} />
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
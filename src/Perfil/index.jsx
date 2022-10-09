import React, { useState } from 'react';
import '../index.css';
import { AiFillStar, AiOutlineStar, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useLocation } from 'react-router';
import { getUrlImg, updateDocFB, uploadImage } from '../firebase-config';

function Perfil() {

    const location = useLocation();

    console.log(location);

    const [photoUrl, setphotoUrl] = useState(location.state.user.id ? location.state.user.id : 'https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg')

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

    const uploadPhoto = async (cpf, file) => {
        console.log(file);
        if (file) {
            await uploadImage(cpf, file)
        }
    }

    const validatePhoto = async (foto) => {
        await uploadPhoto(`${location.state.user.name}_perfil`, foto);
        await getUrlImg(`${location.state.user.name}_perfil`).then(url => {
            setphotoUrl(url);
        })
        let newDoc = location.state.user;
        newDoc.perfil = photoUrl
        await updateDocFB(newDoc.id, newDoc);
    }
    return (
        <div className="containerPerfil">
            <div className="subcontainerPerfil">
                <div className="sidebar">
                    <div className="imgCandidatoPerfil">
                        <div className="crop">
                            <img alt='' src={photoUrl} width={'200px'} />
                        </div>
                        <form>
                            <div className='photoPerfil'>
                                <label for="arquivo">Enviar arquivo</label>
                                <input type="file" name="arquivo" id="arquivo" onChange={(e) => {
                                    validatePhoto(e.target.files[0]);
                                }} />
                            </div>
                        </form>

                        <div className="btnVagas" onClick={() => window.location.href = '/vagasecursos'}>
                            Visualizar Vagas e Cursos
                        </div>
                        {/* <div className="btnVagas" style={{backgroundColor: '#00a500'}} onClick={() => window.location.href = '/vagasecursos'}>
                            Aprimorar-se
                        </div> */}
                        <div className='cvUpload'>
                            <p>Envie seu CV</p>
                            <input type="file" name="" id="" />
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
                        <label htmlFor="">Interesses: </label>
                        <select>
                            {location.state.user.interesses.map(el => <option>{el}</option>)}
                        </select>
                    </div>
                    <div className='inforSubHolder'>
                        Nível de conhecimento:
                        {validateConhecimento()}
                    </div>
                    <div className='inforSubHolder'>
                        Links:
                        <AiFillGithub fontSize={'25px'} onClick={() => window.open(location.state.user.github, '_blank')} />
                        <AiFillLinkedin fontSize={'25px'} color='blue' onClick={() => window.open(location.state.user.linkedin, '_blank')} />

                    </div>
                    <hr />
                    <div className="iframesHolder">
                        <p>Vídeos relacionados a sua área:</p>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/1nVUfZg2dSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/1nVUfZg2dSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/1nVUfZg2dSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe width="300" height="150" src="https://www.youtube.com/embed/1nVUfZg2dSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    {/* <div className="btnEdit" onClick={() => {
                        setBtnName(!btnName);
                        setenableInput(!true);
                        setshowLink(!showLink);
                    }}>{btnName ? 'Editar' : 'Salvar'}</div> */}
                </div>
            </div>
            <div className="backBtn" onClick={() => window.location.href = "/loginCandidato"}>
                Sair
            </div>
        </div>
    )
}

export default Perfil
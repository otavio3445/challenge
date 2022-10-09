import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { getUsersFB } from '../firebase-config';
import '../index.css';

function LoginCandidato() {
    const history = useNavigate();

    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");
    const [showMessage, setshowMessage] = useState(false);

    const validateLogin = async () => {
        const users = await getUsersFB();
        if (email !== "" && senha !== "") {
            users.forEach(user => {
                if (email === user.data().email) {
                    history('/perfil', {state:{user: user.data()}})
                } else {
                    setshowMessage(true);
                }
            })
        }
    }
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
    };

    return (
        <>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', zIndex: -1 }}>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#2E2E38",
                                },
                            },
                            style: {
                                zIndex: -1
                            },
                            fpsLimit: 200,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: false,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: false,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 2000,
                                        duration: 100,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 3,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>
                <div className="mainContentLogin">
                    <div className="formLogin">
                        <div>
                            <h2>Login</h2>
                            <div>
                                <input type="text" name="txtEmail" id="" placeholder='Email' required onChange={(e) => setemail(e.target.value)} autoComplete='off'/>
                            </div>
                            <div>
                                <input type="password" name="txtEmail" id="" placeholder='Senha' required onChange={(e) => setsenha(e.target.value)} autoComplete='off'/>
                            </div>
                            <div className="orderBtnsLogin">
                                <div className="btnLogin" onClick={validateLogin}>Login</div>
                                <a href="/cadastro" className='cadCandidato'>Cadastrar</a>
                                {showMessage && <h3>Email ou senha incorretos, por favor tente novamente!</h3>}
                            </div>
                        </div>
                        <div className="backBtn" onClick={() => window.location.href = "/"}>
                            Voltar
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCandidato
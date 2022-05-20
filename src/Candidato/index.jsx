import React from 'react';
import '../index.css';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Slider from 'react-slick/lib/slider';

function Candidato() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const cardsCurso = () => {
        return (
            <Slider {...settings}>
                <div className="card-curso-holder">
                    <div className="card-curso">
                        <div className="card-curso-header">
                            <p>Introdução a lógica de programação</p>
                        </div>
                        <div className="card-curso-footer">
                            <p>Duração: 40h</p>
                        </div>
                    </div>
                </div>
                <div className="card-curso-holder">
                    <div className="card-curso">
                        <div className="card-curso-header">
                            <p>Introdução a UX e UI</p>
                        </div>
                        <div className="card-curso-footer">
                            <p>Duração: 20h</p>
                        </div>
                    </div>
                </div>
                <div className="card-curso-holder">
                    <div className="card-curso">
                        <div className="card-curso-header">
                            <p>Introdução ao HTML e CSS</p>
                        </div>
                        <div className="card-curso-footer">
                            <p>Duração: 10h</p>
                        </div>
                    </div>
                </div>
                <div className="card-curso-holder">
                    <div className="card-curso">
                        <div className="card-curso-header">
                            <p>HTML Avançado</p>
                        </div>
                        <div className="card-curso-footer">
                            <p>Duração: 24h</p>
                        </div>
                    </div>
                </div>
                <div className="card-curso-holder">
                    <div className="card-curso">
                        <div className="card-curso-header">
                            <p>CSS Avançado</p>
                        </div>
                        <div className="card-curso-footer">
                            <p>Duração: 34h</p>
                        </div>
                    </div>
                </div>
                <div className="card-curso-holder">
                    <div className="card-curso">
                        <div className="card-curso-header">
                            <p>Javascript ES6+</p>
                        </div>
                        <div className="card-curso-footer">
                            <p>Duração: 76h</p>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }

    const cardsVagas = () => {
        return (
            <Slider {...settings}>
                <div className="card-vaga-holder">
                    <div className="card-vaga">
                        <div className="card-vaga-header">
                            <p>Analista Front-end</p>
                        </div>
                        <div className="card-vaga-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>
                <div className="card-vaga-holder">
                    <div className="card-vaga">
                        <div className="card-vaga-header">
                            <p>Desenvolvedor Front-end</p>
                        </div>
                        <div className="card-vaga-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>
                <div className="card-vaga-holder">
                    <div className="card-vaga">
                        <div className="card-vaga-header">
                            <p>Web Designer</p>
                        </div>
                        <div className="card-vaga-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>
                <div className="card-vaga-holder">
                    <div className="card-vaga">
                        <div className="card-vaga-header">
                            <p>Desenvolvedor Full-Stack</p>
                        </div>
                        <div className="card-vaga-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>
                <div className="card-vaga-holder">
                    <div className="card-vaga">
                        <div className="card-vaga-header">
                            <p>Analista Front-end</p>
                        </div>
                        <div className="card-vaga-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
    return (
        <>
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', zIndex: -1 }}>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={
                            {
                                "fullScreen": {
                                    "enable": true,
                                    "zIndex": 1
                                },
                                "detectRetina": true,
                                "fpsLimit": 120,
                                "interactivity": {
                                    "events": {
                                        "onClick": {
                                            "enable": true,
                                            "mode": "push"
                                        },
                                        "onDiv": {
                                            "elementId": "repulse-div",
                                            "enable": false,
                                            "mode": "repulse"
                                        },
                                        "onHover": {
                                            "enable": true,
                                            "mode": "connect",
                                            "parallax": {
                                                "enable": false,
                                                "force": 60,
                                                "smooth": 10
                                            }
                                        },
                                        "resize": true
                                    },
                                    "modes": {
                                        "bubble": {
                                            "distance": 400,
                                            "duration": 2,
                                            "opacity": 0.8,
                                            "size": 40,
                                            "speed": 3
                                        },
                                        "connect": {
                                            "distance": 80,
                                            "lineLinked": {
                                                "opacity": 0.5
                                            },
                                            "radius": 60
                                        },
                                        "grab": {
                                            "distance": 400,
                                            "lineLinked": {
                                                "opacity": 1
                                            }
                                        },
                                        "push": {
                                            "quantity": 4
                                        },
                                        "remove": {
                                            "quantity": 2
                                        },
                                        "repulse": {
                                            "distance": 200,
                                            "duration": 0.4
                                        }
                                    }
                                },
                                "particles": {
                                    "color": {
                                        "value": "random"
                                    },
                                    "lineLinked": {
                                        "blink": false,
                                        "color": "#ffffff",
                                        "consent": false,
                                        "distance": 150,
                                        "enable": false,
                                        "opacity": 0.4,
                                        "width": 1
                                    },
                                    "move": {
                                        "attract": {
                                            "enable": false,
                                            "rotate": {
                                                "x": 600,
                                                "y": 1200
                                            }
                                        },
                                        "bounce": false,
                                        "direction": "none",
                                        "enable": true,
                                        "outMode": "out",
                                        "random": false,
                                        "speed": 6,
                                        "straight": false
                                    },
                                    "number": {
                                        "density": {
                                            "enable": true,
                                            "area": 800
                                        },
                                        "limit": 500,
                                        "value": 300
                                    },
                                    "opacity": {
                                        "animation": {
                                            "enable": false,
                                            "minimumValue": 0.1,
                                            "speed": 1,
                                            "sync": false
                                        },
                                        "random": false,
                                        "value": 0.5
                                    },
                                    "shape": {
                                        "type": "circle"
                                    },
                                    "size": {
                                        "animation": {
                                            "enable": false,
                                            "minimumValue": 0.1,
                                            "speed": 40,
                                            "sync": false
                                        },
                                        "random": true,
                                        "value": 5
                                    }
                                },
                                "polygon": {
                                    "draw": {
                                        "enable": false,
                                        "lineColor": "#ffffff",
                                        "lineWidth": 0.5
                                    },
                                    "move": {
                                        "radius": 10
                                    },
                                    "scale": 1,
                                    "type": "none",
                                    "url": ""
                                },
                                "background": {
                                    "color": "#000000",
                                    "image": "",
                                    "position": "50% 50%",
                                    "repeat": "no-repeat",
                                    "size": "cover"
                                }
                            }


                        }
                    />
                </div>
                <div className="mainContentLogin">
                    <div className="candidatoHolderVagas">
                        <h1>Vagas</h1>
                        {cardsVagas()}
                        <h1>Cursos</h1>
                        {cardsCurso()}
                    </div>
                </div>
            </div>

            <div className="backBtn" onClick={() => window.location.href = "/perfil"}>
                Voltar
            </div>
        </>
    )
}

export default Candidato
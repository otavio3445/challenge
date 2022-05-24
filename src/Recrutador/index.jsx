import React, { useState } from 'react';
import '../index.css';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Slider from 'react-slick/lib/slider';

function Recrutador() {

    const [senior, setsenior] = useState(true);
    const [pleno, setpleno] = useState(true);
    const [junior, setjunior] = useState(true);

    const settings = {
        dots: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3500,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const cardsVagas = () => {
        return (
            <Slider {...settings}>
                {pleno && <div className="card-candidato-holder">
                    <div className="card-candidato">
                        <div className="card-candidato-header">
                            <div className="candidatoImg">
                                <img alt="candidato 01" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                            </div>
                            <h4 style={{ margin: '0' }}>Nome: Renan Silva</h4>
                            <p style={{ margin: '0' }}>Perfil: Desenvolvedor Back-end</p>
                            <p style={{ margin: '0' }}>Nível: Pleno</p>
                        </div>
                        <div className="card-candidato-footer" onClick={() => window.location.href = '/perfilReview'}>
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>}
                {pleno && <div className="card-candidato-holder">
                    <div className="card-candidato">
                        <div className="card-candidato-header">
                            <div className="candidatoImg">
                                <img alt="candidato 02" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                            </div>
                            <h4 style={{ margin: '0' }}>Nome: Maira Luz</h4>
                            <p style={{ margin: '0' }}>Perfil: Desenvolvedor Back-end</p>
                            <p style={{ margin: '0' }}>Nível: Pleno</p>
                        </div>
                        <div className="card-candidato-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>}
                {junior && <div className="card-candidato-holder">
                    <div className="card-candidato">
                        <div className="card-candidato-header">
                            <div className="candidatoImg">
                                <img alt="candidato 03" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                            </div>
                            <h4 style={{ margin: '0' }}>Nome: Bruna Zimmerman</h4>
                            <p style={{ margin: '0' }}>Perfil: QA</p>
                            <p style={{ margin: '0' }}>Nível: Júnior</p>
                        </div>
                        <div className="card-candidato-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>}
                {senior && <div className="card-candidato-holder">
                    <div className="card-candidato">
                        <div className="card-candidato-header">
                            <div className="candidatoImg">
                                <img alt="candidato 04" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                            </div>
                            <h4 style={{ margin: '0' }}>Nome: Thiago Silva</h4>
                            <p style={{ margin: '0' }}>Perfil: Desenvolvedor Front-end</p>
                            <p style={{ margin: '0' }}>Nível: Sênior</p>
                        </div>
                        <div className="card-candidato-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>}
                {junior && <div className="card-candidato-holder">
                    <div className="card-candidato">
                        <div className="card-candidato-header">
                            <div className="candidatoImg">
                                <img alt="candidato 06" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                            </div>
                            <h4 style={{ margin: '0' }}>Nome: Patrícia Lopes</h4>
                            <p style={{ margin: '0' }}>Perfil: Analista de Infra</p>
                            <p style={{ margin: '0' }}>Nível: Júnior</p>
                        </div>
                        <div className="card-candidato-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>}
                {junior && <div className="card-candidato-holder">
                    <div className="card-candidato">
                        <div className="card-candidato-header">
                            <div className="candidatoImg">
                                <img alt="candidato 06" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                            </div>
                            <h4 style={{ margin: '0' }}>Nome: Joaquim Medeiros</h4>
                            <p style={{ margin: '0' }}>Perfil: UX Design</p>
                            <p style={{ margin: '0' }}>Nível: Júnior</p>
                        </div>
                        <div className="card-candidato-footer">
                            <p>Saiba Mais</p>
                        </div>
                    </div>
                </div>}
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
                                "particles": {
                                    "number": {
                                        "value": 6,
                                        "density": {
                                            "enable": true,
                                            "value_area": 800
                                        }
                                    },
                                    "color": {
                                        "value": "#1b1e34"
                                    },
                                    "shape": {
                                        "type": "polygon",
                                        "polygon": {
                                            "sides": 6
                                        }
                                    },
                                    "opacity": {
                                        "value": 0.5,
                                        "random": {
                                            "enable": true,
                                            "minimumValue": 0.3
                                        },
                                        "anim": {
                                            "enable": false,
                                            "speed": 1,
                                            "opacity_min": 0.1,
                                            "sync": false
                                        }
                                    },
                                    "size": {
                                        "value": 160,
                                        "random": {
                                            "enable": true,
                                            "minimumValue": 100
                                        },
                                        "anim": {
                                            "enable": false,
                                            "speed": 5,
                                            "size_min": 40,
                                            "sync": false
                                        }
                                    },
                                    "line_linked": {
                                        "enable": false,
                                        "distance": 200,
                                        "color": "#ffffff",
                                        "opacity": 1,
                                        "width": 2
                                    },
                                    "move": {
                                        "enable": true,
                                        "speed": 8,
                                        "direction": "none",
                                        "random": false,
                                        "straight": false,
                                        "out_mode": "out",
                                        "attract": {
                                            "enable": false,
                                            "rotateX": 600,
                                            "rotateY": 1200
                                        }
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "bubble"
                                        },
                                        "onclick": {
                                            "enable": false,
                                            "mode": "push"
                                        },
                                        "resize": true
                                    },
                                    "modes": {
                                        "grab": {
                                            "distance": 400,
                                            "line_linked": {
                                                "opacity": 1
                                            }
                                        },
                                        "bubble": {
                                            "distance": 400,
                                            "duration": 2,
                                            "size": 40,
                                            "opacity": 0.8,
                                            "speed": 3,
                                        },
                                        "repulse": {
                                            "distance": 200
                                        },
                                        "push": {
                                            "particles_nb": 4
                                        },
                                        "remove": {
                                            "particles_nb": 2
                                        }
                                    }
                                },
                                "retina_detect": true,
                                "background": {
                                    "color": "#efefef",
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
                    <div className="candidatoHolder">

                        <h1>Candidatos:</h1>
                        <div style={{ marginBottom: '20px' }}>
                            <label>Filtrar por:</label>
                            <select onChange={(e) => {
                                switch (e.target.selectedIndex) {
                                    case 0:
                                        setjunior(true);
                                        setpleno(true);
                                        setsenior(true);
                                        break;
                                    case 1:
                                        setjunior(false);
                                        setpleno(false);
                                        setsenior(true);

                                        break;
                                    case 2:
                                        setjunior(false);
                                        setpleno(true);
                                        setsenior(false);

                                        break;
                                    case 3:
                                        setjunior(true);
                                        setpleno(false);
                                        setsenior(false);

                                        break;
                                }
                            }}>
                                <option>Todos</option>
                                <option>Sênior</option>
                                <option>Pleno</option>
                                <option>Júnior</option>
                            </select>
                        </div>
                        {cardsVagas()}
                    </div>
                </div>
            </div>
            <div className="backBtn" onClick={() => window.location.href = "/"}>
                Sair
            </div>
        </>
    )
}

export default Recrutador
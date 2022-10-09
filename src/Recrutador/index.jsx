import React, { useState, useEffect } from 'react';
import '../index.css';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Slider from 'react-slick/lib/slider';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function Recrutador() {
    const [users, setusers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(usersCollectionRef);
            setusers(data.docs.map((doc) => ({ ...doc.data() })));
        }
        getUser();
        // eslint-disable-next-line
    }, []);

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
    };

    const history = useNavigate();

    const cardsVagas = () => {
        return (
            <Slider {...settings}>
                {
                    users.map(user => {
                        const layout = <div className="card-candidato-holder">
                            <div className="card-candidato">
                                <div className="card-candidato-header">
                                    <div className="candidatoImg">
                                        <img alt="candidato 01" src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg" width={'200px'} />
                                    </div>
                                    <h4 style={{ margin: '5px 0' }}>Nome: {user.name}</h4>
                                </div>
                                <div className="card-candidato-footer" onClick={() => history('/perfilReview', {state: {user: user}})}>
                                    <p>Saiba Mais</p>
                                </div>
                            </div>
                        </div>
                        return layout
                        
                    })
                }
            </Slider>
        )
    }
    return (
        <>
            {
                users.map(user => console.log(user))
            }
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
                                        "value": "#FFE600"
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
                                    "color": "#2E2E38",
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
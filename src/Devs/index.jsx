import React from 'react';
import '../index.css';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

function Devs() {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

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
                                "background": {
                                    "color": {
                                        "value": "#000000"
                                    }
                                },
                                "fullScreen": {
                                    "enable": true,
                                    "zIndex": -1
                                },
                                "particles": {
                                    "bounce": {
                                        "vertical": {
                                            "value": 0
                                        },
                                        "horizontal": {
                                            "value": 0
                                        }
                                    },
                                    "color": {
                                        "value": ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
                                        "animation": {
                                            "enable": true,
                                            "speed": 30
                                        }
                                    },
                                    "move": {
                                        "decay": 0.1,
                                        "direction": "top",
                                        "enable": true,
                                        "gravity": {
                                            "acceleration": 9.81,
                                            "enable": true,
                                            "maxSpeed": 200
                                        },
                                        "outModes": {
                                            "top": "none",
                                            "default": "destroy",
                                            "bottom": "bounce"
                                        },
                                        "speed": {
                                            "min": 50,
                                            "max": 150
                                        }
                                    },
                                    "number": {
                                        "value": 0,
                                        "limit": 300
                                    },
                                    "opacity": {
                                        "value": 1,
                                        "animation": {
                                            "enable": false,
                                            "startValue": "max",
                                            "destroy": "min",
                                            "speed": 0.3,
                                            "sync": true
                                        }
                                    },
                                    "rotate": {
                                        "value": {
                                            "min": 0,
                                            "max": 360
                                        },
                                        "direction": "random",
                                        "move": true,
                                        "animation": {
                                            "enable": true,
                                            "speed": 60
                                        }
                                    },
                                    "tilt": {
                                        "direction": "random",
                                        "enable": true,
                                        "move": true,
                                        "value": {
                                            "min": 0,
                                            "max": 360
                                        },
                                        "animation": {
                                            "enable": true,
                                            "speed": 60
                                        }
                                    },
                                    "shape": {
                                        "type": ["circle", "square", "polygon", "character", "character", "character"],
                                        "options": {
                                            "polygon": [
                                                {
                                                    "sides": 5
                                                },
                                                {
                                                    "sides": 6
                                                }
                                            ],
                                            "character": [
                                                {
                                                    "value": ["💩", "🤡", "🍀", "🍙"]
                                                }
                                            ]
                                        }
                                    },
                                    "size": {
                                        "value": 3
                                    },
                                    "roll": {
                                        "darken": {
                                            "enable": true,
                                            "value": 30
                                        },
                                        "enlighten": {
                                            "enable": true,
                                            "value": 30
                                        },
                                        "enable": true,
                                        "speed": {
                                            "min": 15,
                                            "max": 25
                                        }
                                    },
                                    "wobble": {
                                        "distance": 30,
                                        "enable": true,
                                        "move": true,
                                        "speed": {
                                            "min": -15,
                                            "max": 15
                                        }
                                    }
                                },
                                "emitters": {
                                    "position": {
                                        "x": 50,
                                        "y": 100
                                    },
                                    "size": {
                                        "width": 0,
                                        "height": 0
                                    },
                                    "rate": {
                                        "quantity": 10,
                                        "delay": 0.1
                                    }
                                }
                            }
                        }
                    />
                </div>
                <div className="mainContentLogin">
                    <div className="candidatoHolderVagas">
                        <h1>Desenvolvedores</h1>
                        <div className='dev'>
                            <h2>Camila Gabriel Marraccini</h2>
                            <h3>RM: 83209</h3>
                        </div>
                        <div className='dev'>
                            <h2>Carolina Naomi Miura de Paula</h2>
                            <h3>RM: 83166</h3>
                        </div>
                        <div className='dev'>
                            <h2>Gabriel Domingues de Almeida</h2>
                            <h3>RM: 83422</h3>
                        </div>
                        <div className='dev'>
                            <h2>Guilherme Briotto</h2>
                            <h3>RM: 82385</h3>
                        </div>
                        <div className='dev'>
                            <h2>Otávio Augusto Della Libera</h2>
                            <h3>RM: 82075</h3>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="backBtn" onClick={() => window.location.href = "/"}>
                Sair
            </div>
        </>
    )
}

export default Devs
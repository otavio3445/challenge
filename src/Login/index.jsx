import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import '../index.css';

function Login() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <>
            <div style={{ position: 'relative'}}>
                <div style={{ position: 'absolute' , zIndex: -1}}>
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                          background: {
                            color: {
                              value: "#1a1a1a",
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
                    <div className="souEy" onClick={() => window.location.href="/login"}>
                        Sou da EY
                    </div>
                    <div className="newCad" onClick={() => window.location.href="/loginCandidato"}>
                        Quero ser da EY
                    </div>
                    <div className="desenvolvedores" onClick={() => window.location.href="/Devs"}>Desenvolvedores</div>
                </div>
            </div>
        </>
    )
}

export default Login
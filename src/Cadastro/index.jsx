import React, { useState } from 'react';
import '../index.css';
import {db} from '../firebase-config';
import {collection, addDoc} from 'firebase/firestore'

function Cadastro() {

  const [testeVoc, settesteVoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalTeste, setShowModalTeste] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [level, setLevel] = useState('');

  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const [typeUser, settypeUser] = useState('Front-end');
  const [levelUser, setlevelUser] = useState('');
  const [github, setgithub] = useState('');
  const [linkedin, setlinkedin] = useState('');

  const userCollectionRef = collection(db, 'users');

  const cadastrar = async(name, age, email, senha, typeUser, levelUser, github, linkedin) => {

    await addDoc(userCollectionRef, {
      name: name,
      age: age,
      email: email,
      senha: senha,
      level: levelUser,
      type: typeUser,
      github: github,
      linkedin: linkedin
    });
    window.location.href = '/perfil'
  }

  const page01 = () => {
    return (
      <form>
        <input type="text" placeholder='Digite seu nome' onChange={(e) => setname(e.target.value)} />
        <input type="email" placeholder='Digite seu Email' onChange={(e) => setemail(e.target.value)}/>
        <input type="password" placeholder='Digite sua senha' onChange={(e) => setsenha(e.target.value)}/>
        <input type="number" name="" id="" placeholder='Digite sua idade' onChange={(e) => setage(e.target.value)}/>
        <input type="text" placeholder='Link do GitHub' onChange={(e) => setgithub(e.target.value)}/>
        <input type="text" placeholder='Link do LinkedIn' onChange={(e) => setlinkedin(e.target.value)}/>
        <div className="btnsTeste">
          <div>
            <input type="radio" name="btnTeste" id="btnSei"
              onClick={() => { settesteVoc(true) }}
            /><label htmlFor='#btnSei'>Já sei a área que vou seguir</label>
          </div>
          <div>
            <input type="radio" name="btnTeste" id="btnNaoSei"
              onClick={() => { settesteVoc(false) }}
            /><label htmlFor='#btnNaoSei'>Não sei qual área seguir</label>
          </div>
        </div>
        {testeVoc !== null ? <div className='holderDecision'>
          {testeVoc === true ? page02() : ''}
          {testeVoc === false ? page03() : ''}
        </div> : ''}
        {showEnd && <div className='btnConcluir' 
        onClick={() => cadastrar(name, age, email, senha, typeUser, levelUser, github, linkedin)}>
          Concluir Cadastro</div>}

      </form>
    )
  }
  const page02 = () => {
    return (
      <div>
        <select className='selectArea' onChange={(e) => {
          if (e.target.selectedIndex === 0) {
            settypeUser('Front-end')
          } else if (e.target.selectedIndex === 1) {
            settypeUser('Back-end')
          } else if (e.target.selectedIndex === 2) {
            settypeUser('QA')
          }else if (e.target.selectedIndex === 3) {
            settypeUser('Infraestrutura')
          }
        }}>
          <option>Desenvolvimento Fron-end</option>
          <option>Desenvolvimento Back-end</option>
          <option>Automação</option>
          <option>Infraestrutura</option>
        </select>
        <div className='btnConcluir' onClick={() => setShowModalTeste(!showModalTeste)}>Fazer Teste de Conhecimento</div>
        <p style={{ color: 'white' }}>{level !== '' ? level : ''}</p>
        {level !== '' ? <div style={{backgroundColor: 'lime'}} className='btnConcluir' 
        onClick={() => cadastrar(name, age, email, senha, typeUser, levelUser, github, linkedin)}>
          Concluir</div> : ''}
      </div>
    )
  }
  const page03 = () => {
    return (
      <div className='btnModalTesteHolder'>
        <div className="btnModalTeste" onClick={() => setShowModal(!showModal)}>Abrir Teste Vocacional</div>
      </div>
    )
  }

  const selectConcordo = () => {
    return (
      <select>
        <option selected="true" disabled="disabled">Selecione</option>
        <option>Concordo Totalmente</option>
        <option>Concordo Parcialmente</option>
        <option>Neutro</option>
        <option>Discordo Parcialmente</option>
        <option>Discordo Totalemnte</option>
      </select>
    )
  }

  const modalTeste = () => {
    return (
      <div className='modalTeste'>
        <div style={{
          display: 'block',
          padding: '0 50px 10px 50px',
          border: '1px dotted black',
          overflow: 'auto',
          backgroundColor: 'rgb(227, 227, 227, .5)'
        }}>
          <h1>Bem vindo(a) ao teste vocacional da EY!</h1>
          <h3>Preencha atentamente as perguntas abaixo:</h3>
          <hr></hr>
          <div className="perguntasHolder">
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Eu gosto de programar</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Prefiro lidar com máquinas do que com pessoas</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Prefiro lidar com pessoas do que com máquinas</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Tenho uma visão mais artística das coisas</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Gosto de liderar os outros</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Não gosto de ser o centro das atenções</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Tenho experiência com metodologias Agile</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Tenho facilidade em encontrar problemas e erros</p>
              {selectConcordo()}
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>O funcionamento importa mais que o design</p>
              {selectConcordo()}
            </div>

            <div className="btnSalvarTeste" onClick={() => {
              let number = (Math.random()*100).toFixed(0);
              if (Number(number) >=75) {
                settypeUser('Front-end')
              } else if (Number(number) >=50) {
                settypeUser('Back-end')
              } else if (Number(number) >=25) {
                settypeUser('QA')
              } else {
                settypeUser('Infraestrutura')
              }
              setShowModal(false)
              setShowEnd(true)
              settesteVoc(null)
            }
            }>Salvar</div>
            <div className="backBtn" onClick={() => setShowModal(false)}>
              Voltar
            </div>
          </div>
        </div>
      </div>
    )
  }

  const modalTesteConhecimento = () => {
    return (
      <div className='modalTeste'>
        <div style={{
          display: 'block',
          padding: '0 50px 10px 50px',
          border: '1px dotted black',
          overflow: 'auto',
          backgroundColor: 'rgb(227, 227, 227, .5)'
        }}>
          <h1>Bem vindo(a) ao teste de conhecimentos da EY!</h1>
          <h3>Preencha atentamente as perguntas abaixo:</h3>
          <hr></hr>
          <div className="perguntasHolder">
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Qual tag a seguir permite tanto estilizar quanto utilização de pequenas imagens:</p>
              <div>
                <input type="radio" name="opcao01"/>img
                <input type="radio" name="opcao01"/>i
                <input type="radio" name="opcao01"/>icon
                <input type="radio" name="opcao01"/>p
              </div>
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Qual dos itens a seguir não é exclusivo de um Pré-processador CSS:</p>
              <div>
                <input type="radio" name="opcao02"/>Mixins
                <input type="radio" name="opcao02"/>Variáveis
                <input type="radio" name="opcao02"/>'&' selector
                <input type="radio" name="opcao02"/>'~' selector
              </div>
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Qual a última versão lançada da linguagem HTML?</p>
              <div>
                <input type="radio" name="opcao03"/>5
                <input type="radio" name="opcao03"/>9
                <input type="radio" name="opcao03"/>6
                <input type="radio" name="opcao03"/>3
              </div>
            </div>
            <div className="pergunta" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <p>Como previnir uma submissão de form no click de um elemento Submit?</p>
              <div>
                <input type="radio" name="opcao04"/>defaultPrevent()
                <input type="radio" name="opcao04"/>preventDefault()
                <input type="radio" name="opcao04"/>cancelDefault()
                <input type="radio" name="opcao04"/>stopDefault()
              </div>
            </div>
            
            <div className="btnSalvarTeste" onClick={() => {
              let number = (Math.random()*100).toFixed(0);
              let nivel = ''
              if (Number(number) >=64) {
                nivel =  'Sênior'
              } else if (Number(number) >=34) {
                nivel =  'Pleno'
              } else {
                nivel =  'Júnior'
              }
              setlevelUser(nivel);
              setLevel(`Seu nível é: ${nivel}`);
              setShowModalTeste(false);
            }
            }>Salvar</div>
            <div className="backBtn" onClick={() => setShowModal(false)}>
              Voltar
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mainCadastro">
      <div className="formCadastro">
        <h1 className="cadastroTitle">Preencha seu cadastro</h1>
        {page01()}
      </div>
      {showModal && modalTeste()}
      {showModalTeste && modalTesteConhecimento()}
      <div className="backBtn" onClick={() => window.location.href = "/loginCandidato"}>
        Voltar
      </div>
    </div>
  )
}

export default Cadastro
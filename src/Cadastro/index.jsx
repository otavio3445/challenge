import React, { useState } from 'react';
import Slider from 'react-slick/lib/slider';
import InputMask from "react-input-mask";
import '../index.css';
import { WithContext as ReactTags } from 'react-tag-input';
import keyWords from './keyWords';

function Cadastro() {

  const [testeVoc, settesteVoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [tags, setTags] = useState([]);

  const KeyCodes = {
    comma: 188,
    enter: 13
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const suggestions = keyWords.map(word => {
    return {
      id: word,
      text: word
    };
  });

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  const page01 = () => {
    return (
      <form>
        <input type="text" placeholder='Digite seu nome' />
        <input type="email" placeholder='Digite seu Email' />
        <input type="password" placeholder='Digite sua senha' />
        <input type="password" placeholder='Repita sua senha' />
        <InputMask mask="99/99/9999" placeholder='Data de Nascimento' />
        <textarea placeholder='Descreva aqui os projetos que foram marcantes para você' className='txtAreaCandidato'/>
        <div className="btnsTeste">
          <div>
            <input type="radio" name="btnTeste" id="btnSei"
              onClick={() => { settesteVoc(true) }}
            /><label htmlFor='#btnSei'>Já tenho alguns interesses</label>
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
        {showEnd && <div className='btnConcluir' onClick={() => window.location.href = '/'}>Concluir Cadastro</div>}

      </form>
    )
  }
  const page02 = () => {
    return (
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          placeholder='Digite seus interesses'
          autocomplete
        />
        <div className='btnConcluir' onClick={() => window.location.href = '/'}>Concluir Cadastro</div>
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
              setShowModal(false)
              setShowEnd(true)
              settesteVoc(null)
            }
            }>Salvar</div>
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
      
      <div className="btnBack" onClick={() => window.location.href= '/'}>
            &lsaquo;
            </div>
    </div>
  )
}

export default Cadastro
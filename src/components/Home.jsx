import '../Home.css'
import { useState } from 'react';

function Home(){
  var [contagem, setContagem] = useState(0)
  var mensagem = ""
  const audio = new Audio("/money.mp3");
  const allClick = () => {
    audio.play();
    setContagem(contagem + 1)
  }
  const audio2 = () => {
    const audio2 = new Audio("/nope.mp3")
    audio2.play()
  }
  function audio3() {
    const audio3 = new Audio("/moneymoneymoney.mp3")
    audio3.play()
  }
  

  return(
    <div>
      <img className="dinheiro ativo" src="/money.png" alt=""/>
      <h1 className="ativo">Aperte e Ganhe</h1>
      <p className="ativo">Agora você tem <b>{contagem}</b> REAIS</p>
      <button className="ativo button-54" onClick={allClick} >PEGAR 1 REAL</button>
      
      <h2><Dinheiro /></h2>
      <button className="ativo button-54" onClick={audio2}>RETIRAR DINHEIRO</button>
    </div>
  )

  function removeClass(className){
    const elements = document.querySelectorAll(`.${className}`)

    elements.forEach((element) => {
      element.classList.remove(className)
    });
  }

  function Dinheiro() {
    if(contagem < 1){
      return (
        <div>
        Primeira Retirada
        <br/>
        Consiga 100 REAIS
        </div>

      )
    }
    else if(contagem < 100){
      return (
        <div>
          Só falta {100 - contagem} REAIS
        </div>
      )
    }
    else{
      mensagem = "Vai trabalhar"
      return(
        <div>
          {removeClass('ativo')}
          <h3>{mensagem}</h3>
          <img className="gif" src="/tenor.gif" alt=""/>
          {audio3()}
        </div>
      )
    }
   
  }
}


export default Home
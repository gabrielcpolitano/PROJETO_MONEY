import '../Home.css'
import { useState } from 'react';

function Home(){
  var [contagem, setContagem] = useState(0)
  var mensagem = ""
  

  return(
    <div>
      <img className="dinheiro ativo" src="/money.png" alt=""/>
      <h1 className="ativo">Aperte e Ganhe</h1>
      <p className="ativo">Agora você tem <b>{contagem}</b> REAIS</p>
      <button className="ativo" onClick={() => setContagem(contagem + 1)}>PEGAR 1 REAL</button>
      
      <h2><Dinheiro /></h2>
      <button className="ativo">RETIRAR DINHEIRO</button>
    </div>
  )

  function removeClass(className){
    const elements = document.querySelectorAll(`.${className}`)

    elements.forEach((element) => {
      element.classList.remove(className)
    });
  }

  function Dinheiro() {
    if(contagem < 10){
      return (
        <div>
        Primeira Retirada
        <br/>
        Consiga 100 REAIS
        </div>

      )
    }
    else if(contagem < 20){
      mensagem = 'Só falta 90 REAIS'
      return mensagem
    }
    else if(contagem < 30){
      mensagem = 'Só falta 80 REAIS'
      return mensagem
    }
    else if(contagem < 40){
      mensagem = 'Só falta 70 REAIS'
      return mensagem
    }
    else if(contagem < 50){
      mensagem = 'Só falta 60 REAIS'
      return mensagem
    }
    else if(contagem < 60){
      mensagem = 'Só falta 50 REAIS'
      return mensagem
    }
    else if(contagem < 70){
      mensagem = 'Só falta 40 REAIS'
      return mensagem
    }
    else if(contagem < 80){
      mensagem = 'Só falta 30 REAIS'
      return mensagem
    }
    else if(contagem < 90){
      mensagem = 'Só falta 20 REAIS'
      return mensagem
    }
    else if(contagem < 100){
      mensagem = 'Só falta 10 REAIS'
      return mensagem
    }
    else{
      mensagem = "Vai trabalhar"
      return(
        <div>
          {removeClass('ativo')}
          <h3>{mensagem}</h3>
          <img className="gif" src="/tenor.gif" alt=""/>
        </div>
      )
    }
   
  }
}


export default Home
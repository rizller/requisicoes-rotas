import React, { useEffect, useState } from 'react';
import "./style.css";

//https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);


//sempre quando carregar a página, chama a função useEffect
  useEffect(()=>{
    function loadApi(){
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url) //faz uma requisição de get nessa URL
      .then((r) => r.json()) //transforma o retorno em json
      .then((json) => {
        setNutri(json); //seta o json no useState Nutri
      })
    
    }

    loadApi();
  }, [])


  return (
    <div className="container">
      <header>
        <strong>React Nutri Project</strong>
      </header>
      {/* pecorre todo o array nutri */}
      {nutri.map((item)=>{
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <span className='categoria'><strong>Categoria:</strong> {item.categoria}</span>
            <img src={item.capa} alt={item.titulo} />
            <p className={item.subtitulo}>
              {item.subtitulo}
            </p>
            <a className='botao'>Acessar</a>
          </article>
        ) 
      })}
    </div>
  );
}

export default App;

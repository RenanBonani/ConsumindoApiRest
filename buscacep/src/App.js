import './App.css';
import { useEffect, useState } from 'react';


export default () => {
  const [cep, setCep] = useState('');
  const handleInput = (e) =>{
    setCep( e.target.value );
  };
  const getCEP = async () =>{
    let result = await fetch(`https://brasilapi.com.br/api/cep/v1/{${cep}}`);
    let json = await result.json    
  }

  return (  
    <div className="conteiner">
      <div className="form-grup">
        <h1>Busca de Cidades</h1>
        <h3 className="sub-titulo">Digite o CEP no campo abaixo.</h3>
        <form>
            <input type="text" value={cep} name="cep" onChange={handleInput} onBlur={getCEP} placeholder="Digite o seu CEP" />
            <h3>Não sabe o seu CEP ? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">Pesquise aqui</a></h3>
            <input type="text"  disabled />
        </form>
        <button onClick={getCEP}>Buscar</button>
      </div>        
    </div>
  );
}


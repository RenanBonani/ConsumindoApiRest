import React from 'react';
import './App.css';
import { Formik, Field, Form } from 'formik';


export default () => {

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      setFieldValue('cidade', 'CEP invalido');
    }

    fetch(`https://brasilapi.com.br/api/cep/v1/{${cep}}`)
      .then((res) => res.json())
      .then((data) => {   
        if (!data.city) {
          setFieldValue('cidade', 'CEP invalido');
        }
        else{
          /*
          Buscando uma forma mais otimizada de fazer

          const cidadeAtendida = ['Andradina','Araçatuba','Birigui', 'Guararapes', 'Jales', 'Mirandópolis','Penápolis','Promissão','Três Lagoas'];
          
          
          */


          if(data.city === 'Andradina'){
            setFieldValue('cidade', data.city +' Cidade Atendida');
          }
          else if(data.city === 'Araçatuba'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Birigui'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Guararapes'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Jales'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Mirandópolis'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Penápolis'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Promissão'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }
          else if(data.city === 'Três Lagoas'){
            setFieldValue('cidade',data.city + ' Cidade Atendida');
          }  
          else setFieldValue('cidade', data.city);
          
        }         
      });

    }


  return ( 
    <Formik
      onSubmit={onSubmit}
      validateOnMount
      initialValues={{
        cep: '',
        cidade: '',
      }}
      
      render={({ setFieldValue }) => (          
        <Form className="conteiner">
          <div className="form-grup">
            <h1>Busca de Cidades</h1>
            <h3 className="sub-titulo">Digite o CEP no campo abaixo.</h3>          
            <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} className="dados" placeholder="Digite o seu CPF" />
            <h3>Não sabe o seu CEP ? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">Pesquise aqui</a></h3>
            <Field name="cidade" type="text" className="dados cidade" placeholder="Cidade" disabled />
          </div>         
        </Form>
      )}
    />
  )}  

import React from 'react'
import psicologa from './assets/psicologa.png'
function App() {
  return (
    <div>
      <div
        className="row px-3 px-md-5 m-0 col-12 d-flex align-items-center teal-text text-darken-2"
        style={{ backgroundColor: '#00b4ab1a' }}
      >
        <h1>Psicóloga Joelma Pereira.</h1>
      </div>
      <div
        className="row col-12 mx-0 teal-border"
        style={{ minHeight: '85vh', border: '1px solid #02ccc214' }}
      >
        <div className="col-md-5 px-0 d-flex text-center justify-content-center">
          <img
            src={psicologa}
            alt="psicologa imagem"
            className="img-fluid col-12 py-0"
            style={{ height: '100%', width: '70%' }}
          />
        </div>
        <div className="col-md-7 d-flex px-md-4">
          <div className="my-2 align-items-center d-flex">
            <div className="text-center">
              <div className="teal-text text-darken-2">
                <h2 className="my-0">ATENDIMENTO PSICOLÓGICO</h2>
                <h2 className="my-0">
                  EM <b>SERRA TALHADA</b> PARA:
                </h2>
              </div>
              <h3 className="indigo-text darken-2 my-5">
                <b>Adolescente, Adulto, Idoso e infantil.</b>
              </h3>
              <div>
                <p className="h3 teal-text text-darken-2 d-inline-block">
                  Através da conversação as idéias são expressadas e
                  compartilhadas, com a finalidade de alcançar o equilibrio
                  entre a razão e a emoção, bem-estar e qualidade de vida.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="https://instagram.com/psicologa_joelma_pereira?utm_medium=copy_link"
                  className="btn btn-large btn-success d-flex align-items-center text-center justify-content-center py-sm-5"
                >
                  <h5>
                    <b>CLIQUE AQUI E FALE COMIGO</b>
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#00b4ab1a' }}>
        <h3 className="text-center teal-text text-darken-2">
          Psicologa Joelma Pereira
        </h3>
      </div>
    </div>
  )
}

export default App

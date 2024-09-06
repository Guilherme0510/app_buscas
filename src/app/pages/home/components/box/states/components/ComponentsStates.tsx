import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ComponentsStates.css';
import { 
  acre, amapa, amazonas, para, rondonia, roraima, tocantins,
  alagoas, bahia, ceara, maranhao, paraiba, pernambuco, piaui,
  rioGrandeDoNorte, sergipe, distritoFederal, goias, matoGrosso,
  matoGrossoDoSul, espiritoSanto, minasGerais, rioDeJaneiro,
  saoPaulo, parana, rioGrandeDoSul, santaCatarina 
} from './Bandeiras/all_bandeiras'

export const ComponentsStates: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("Norte");
  const navigate = useNavigate();

  const handleStateClick = (stateName: string) => {
    navigate(`/pesquisas?location=${encodeURIComponent(stateName)}`);
  };

  return (
    <div className="estados-container">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="region-title">Estabelecimentos de Todas as Regiões</h2>
          <select
            className="region-select form-select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>

          <ul className="state-list">
            {selectedRegion === "Norte" && (
              <>
                <li><button onClick={() => handleStateClick("Acre")}><img src={acre} alt="Acre" /></button>Acre</li>
                <li><button onClick={() => handleStateClick("Amapá")}><img src={amapa} alt="Amapá" /></button>Amapá</li>
                <li><button onClick={() => handleStateClick("Amazonas")}><img src={amazonas} alt="Amazonas" /></button>Amazonas</li>
                <li><button onClick={() => handleStateClick("Pará")}><img src={para} alt="Pará" /></button>Pará</li>
                <li><button onClick={() => handleStateClick("Rondônia")}><img src={rondonia} alt="Rondônia" /></button>Rondônia</li>
                <li><button onClick={() => handleStateClick("Roraima")}><img src={roraima} alt="Roraima" /></button>Roraima</li>
                <li><button onClick={() => handleStateClick("Tocantins")}><img src={tocantins} alt="Tocantins" /></button>Tocantins</li>
              </>
            )}
            {selectedRegion === "Nordeste" && (
              <>
                <li><button onClick={() => handleStateClick("Alagoas")}><img src={alagoas} alt="Alagoas" /></button>Alagoas</li>
                <li><button onClick={() => handleStateClick("Bahia")}><img src={bahia} alt="Bahia" /></button>Bahia</li>
                <li><button onClick={() => handleStateClick("Ceará")}><img src={ceara} alt="Ceará" /></button>Ceará</li>
                <li><button onClick={() => handleStateClick("Maranhão")}><img src={maranhao} alt="Maranhão" /></button>Maranhão</li>
                <li><button onClick={() => handleStateClick("Paraíba")}><img src={paraiba} alt="Paraíba" /></button>Paraíba</li>
                <li><button onClick={() => handleStateClick("Pernambuco")}><img src={pernambuco} alt="Pernambuco" /></button>Pernambuco</li>
                <li><button onClick={() => handleStateClick("Piauí")}><img src={piaui} alt="Piauí" /></button>Piauí</li>
                <li><button onClick={() => handleStateClick("Rio Grande do Norte")}><img src={rioGrandeDoNorte} alt="Rio Grande do Norte" /></button>Rio Grande do Norte</li>
                <li><button onClick={() => handleStateClick("Sergipe")}><img src={sergipe} alt="Sergipe" /></button>Sergipe</li>
              </>
            )}
            {selectedRegion === "Centro-Oeste" && (
              <>
                <li><button onClick={() => handleStateClick("Distrito Federal")}><img src={distritoFederal} alt="Distrito Federal" /></button>Distrito Federal</li>
                <li><button onClick={() => handleStateClick("Goiás")}><img src={goias} alt="Goiás" /></button>Goiás</li>
                <li><button onClick={() => handleStateClick("Mato Grosso")}><img src={matoGrosso} alt="Mato Grosso" /></button>Mato Grosso</li>
                <li><button onClick={() => handleStateClick("Mato Grosso do Sul")}><img src={matoGrossoDoSul} alt="Mato Grosso do Sul" /></button>Mato Grosso do Sul</li>
              </>
            )}
            {selectedRegion === "Sudeste" && (
              <>
                <li><button onClick={() => handleStateClick("Espírito Santo")}><img src={espiritoSanto} alt="Espírito Santo" /></button>Espírito Santo</li>
                <li><button onClick={() => handleStateClick("Minas Gerais")}><img src={minasGerais} alt="Minas Gerais" /></button>Minas Gerais</li>
                <li><button onClick={() => handleStateClick("Rio de Janeiro")}><img src={rioDeJaneiro} alt="Rio de Janeiro" /></button>Rio de Janeiro</li>
                <li><button onClick={() => handleStateClick("São Paulo")}><img src={saoPaulo} alt="São Paulo" /></button>São Paulo</li>
              </>
            )}
            {selectedRegion === "Sul" && (
              <>
                <li><button onClick={() => handleStateClick("Paraná")}><img src={parana} alt="Paraná" /></button>Paraná</li>
                <li><button onClick={() => handleStateClick("Rio Grande do Sul")}><img src={rioGrandeDoSul} alt="Rio Grande do Sul" /></button>Rio Grande do Sul</li>
                <li><button onClick={() => handleStateClick("Santa Catarina")}><img src={santaCatarina} alt="Santa Catarina" /></button>Santa Catarina</li>
              </>
            )}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

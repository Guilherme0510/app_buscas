import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './ComponentsStates.css';
import { 
  acre, amapa, amazonas, para, rondonia, roraima, tocantins,
  alagoas, bahia, ceara, maranhao, paraiba, pernambuco, piaui,
  rioGrandeDoNorte, sergipe, distritoFederal, goias, matoGrosso,
  matoGrossoDoSul, espiritoSanto, minasGerais, rioDeJaneiro,
  saoPaulo, parana, rioGrandeDoSul, santaCatarina 
} from '../components/Bandeiras/all_bandeiras'

export const ComponentsStates: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("Norte");

  return (
    <Container className="estados-container">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="region-title">Selecione uma Região</h2>
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
                <li><a href="/"><img src={acre} alt="" /></a>Acre</li>
                <li><a href="/"><img src={amapa} alt="" /></a>Amapá</li>
                <li><a href="/"><img src={amazonas} alt="" /></a>Amazonas</li>
                <li><a href="/"><img src={para} alt="" /></a>Pará</li>
                <li><a href="/"><img src={rondonia} alt="" /></a>Rondônia</li>
                <li><a href="/"><img src={roraima} alt="" /></a>Roraima</li>
                <li><a href="/"><img src={tocantins} alt="" /></a>Tocantins</li>
              </>
            )}
            {selectedRegion === "Nordeste" && (
              <>
                <li><a href="/"><img src={alagoas} alt="" /></a>Alagoas</li>
                <li><a href="/"><img src={bahia} alt="" /></a>Bahia</li>
                <li><a href="/"><img src={ceara} alt="" /></a>Ceará</li>
                <li><a href="/"><img src={maranhao} alt="" /></a>Maranhão</li>
                <li><a href="/"><img src={paraiba} alt="" /></a>Paraíba</li>
                <li><a href="/"><img src={pernambuco} alt="" /></a>Pernambuco</li>
                <li><a href="/"><img src={piaui} alt="" /></a>Piauí</li>
                <li><a href="/"><img src={rioGrandeDoNorte} alt="" /></a>Rio Grande do Norte</li>
                <li><a href="/"><img src={sergipe} alt="" /></a>Sergipe</li>
              </>
            )}
            {selectedRegion === "Centro-Oeste" && (
              <>
                <li><a href="/"><img src={distritoFederal} alt="" /></a>Distrito Federal</li>
                <li><a href="/"><img src={goias} alt="" /></a>Goiás</li>
                <li><a href="/"><img src={matoGrosso} alt="" /></a>Mato Grosso</li>
                <li><a href="/"><img src={matoGrossoDoSul} alt="" /></a>Mato Grosso do Sul</li>
              </>
            )}
            {selectedRegion === "Sudeste" && (
              <>
                <li><a href="/"><img src={espiritoSanto} alt="" /></a>Espírito Santo</li>
                <li><a href="/"><img src={minasGerais} alt="" /></a>Minas Gerais</li>
                <li><a href="/"><img src={rioDeJaneiro} alt="" /></a>Rio de Janeiro</li>
                <li><a href="/"><img src={saoPaulo} alt="" /></a>São Paulo</li>
              </>
            )}
            {selectedRegion === "Sul" && (
              <>
                <li><a href="/"><img src={parana} alt="" /></a>Paraná</li>
                <li><a href="/"><img src={rioGrandeDoSul} alt="" /></a>Rio Grande do Sul</li>
                <li><a href="/"><img src={santaCatarina} alt="" /></a>Santa Catarina</li>
              </>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Select from './Select'
import Select1 from './Select1'
// import Select2 from './Select2'
import ContactInfo_row from './ContactInfo_row';
import PassportData_row from './PassportData_row';
import TransferFrom_row from './TransferFrom_row';
import Insuarence_row from './Insuarence_row';
import Payment_row from './Payment_row';

// контейнер-центровщик
const ContainerCenter = styled.section` 
width: 1024px;
margin: auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: '#DFF0F9' }}>
        {/* <Select2 /> */}
        {/* <Select1 />
          <Select /> */}
        <ContainerCenter>
          <ContactInfo_row />
          <PassportData_row />
          <TransferFrom_row />
          <Insuarence_row />
          <Payment_row />
        </ContainerCenter>
      </div>
    );
  }
}

export default App;

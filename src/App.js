import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import List from './List'
import styled from 'styled-components';

import Input from './Input' //удалить здась она для теста
import Select from './Select'
import Select1 from './Select1'
// import Select2 from './Select2'

import PaymentMethods from './PaymentMethods';
import BonusPointsTape from './BonusPointsTape/BonusPointsTape';

import PayButton from './PayButton';

import ContactInfo_row from './ContactInfo_row';
import PassportData_row from './PassportData_row';
import Transfer from './Transfer';
import Insuarence from './Insuarence';

import TotalCost from './TotalCost';

// const style = {
//   // block: {
//   //   display: 'flex',
//   //   justifyContent: 'center'
//   // },
//   paymentHeader: {
//     textAlign: 'left',
//     fontSize: '28px',
//     color: '#003267',
//     marginBottom: '24px'
//   }
// }



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
          {/* <Input >Тестовый вариант</Input > */}
        <ContainerCenter>
          <ContactInfo_row />
          <PassportData_row />
          <Transfer />
          <Insuarence/>
          <PaymentMethods/>
          <BonusPointsTape />

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div></div>
              <div style={{ marginRight: '70px' }}>
                <PayButton>Перейти к оплате</PayButton>
              </div>
              <TotalCost />
            </div>
        </ContainerCenter>
      </div>
    );
  }
}

export default App;

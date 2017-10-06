import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import List from './List'



import PaymentLogoBankCard from './PaymentLogo/PaymentLogoBankCard/PaymentLogoBankCard'
import PaymentLogoYandex from './PaymentLogo/PaymentLogoYandex/PaymentLogoYandex'
import PaymentLogoWebmoney from './PaymentLogo/PaymentLogoWebmoney/PaymentLogoWebmoney'
import PaymentLogoQiwi from './PaymentLogo/PaymentLogoQiwi/PaymentLogoQiwi'
import PaymentLogoKviku from './PaymentLogo/PaymentLogoKviku/PaymentLogoKviku'
import PaymentLogoEuroset from './PaymentLogo/PaymentLogoEuroset/PaymentLogoEuroset'
import PaymentLogoSuperkassa from './PaymentLogo/PaymentLogoSuperkassa/PaymentLogoSuperkassa'

import BonusPointsTape from './BonusPointsTape/BonusPointsTape'

import PayButton from './PayButton'
import TotalCost from './TotalCost'

const style = {
  // block: {
  //   display: 'flex',
  //   justifyContent: 'center'
  // },
  paymentHeader: {
    textAlign: 'left',
    fontSize: '28px',
    color: '#003267',
    marginBottom: '24px'
  }
}
class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: '#DFF0F9' }}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Button1/>
        <List/> */}
        <div style={{ width: '1024px', margin: 'auto' }}>
          <div style={{ marginLeft: '32px', marginRight: '32px' }}> {/*  контейнер-центровщик */}
            
            <div style={style.paymentHeader}>Способ оплаты</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '69px' }}>
              <PaymentLogoBankCard />
              <PaymentLogoYandex />
              <PaymentLogoWebmoney />
              <PaymentLogoQiwi />
              <PaymentLogoKviku />
              <PaymentLogoEuroset />
              <PaymentLogoSuperkassa />
            </div>

            <div style={{ marginBottom: '70px' }}>
              <BonusPointsTape />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div></div>
              <div style={{ marginRight: '70px' }}>
                <PayButton />
              </div>
              <TotalCost />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

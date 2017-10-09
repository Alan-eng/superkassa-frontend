// @flow

import React from 'react';
/* eslint-disable import/extensions */
import Form from 'sk.react.ui/src/components/Form/index.jsx';
/* eslint-enable import/extensions */
import EmailPhone from './EmailPhone';
import PassportData from './PassportData';
import Transfer from './Transfer';
import styles from './index.css';

type Props = {};

type State = {
    email: string,
    phone: string,
    gender: string,
    firstname: string,
    middlename: string,
    lastname: string,
    birthday: string,
    citizenship: string,
    serialnumber: string,
    expired: string,
    transfers: any,
};

class OrderInfo extends React.Component<void, Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            phone: '',
            gender: '',
            firstname: '',
            middlename: '',
            lastname: '',
            birthday: '',
            citizenship: '',
            serialnumber: '',
            expired: '',
            transfers: [
                {
                    title: 'Добавить трансфер из Домодедово 21 сентября',
                    price: '2 500р.',
                    from: 'Аэропорт Домодедово, Москва',
                    to: 'Немчиновка, Одинцовский р-н',
                    cars: ['Стандарт Ford Focus', 'Стандарт Ford Focus', 'Стандарт Ford Focus', 'Стандарт Ford Focus'],
                    carTime: '14-00',
                    welcomeCaption: 'Vlad Junior Spi',
                    destinationAddress: '',
                    comment: '',
                },
                {
                    title: 'Добавить трансфер из Домодедово 21 сентября',
                    price: '2 500р.',
                    from: 'Аэропорт Домодедово, Москва',
                    to: 'Немчиновка, Одинцовский р-н',
                    cars: ['Стандарт Ford Focus', 'Стандарт Ford Focus', 'Стандарт Ford Focus', 'Стандарт Ford Focus'],
                    carTime: '14-00',
                    welcomeCaption: 'Vlad Junior Spi',
                    destinationAddress: '',
                    comment: '',
                },
                {
                    title: 'Добавить трансфер из Домодедово 21 сентября',
                    price: '2 500р.',
                    from: 'Аэропорт Домодедово, Москва',
                    to: 'Немчиновка, Одинцовский р-н',
                    cars: ['Стандарт Ford Focus', 'Стандарт Ford Focus', 'Стандарт Ford Focus', 'Стандарт Ford Focus'],
                    carTime: '14-00',
                    welcomeCaption: 'Vlad Junior Spi',
                    destinationAddress: '',
                    comment: '',
                },
            ],
        };
        this.varChange = this.varChange.bind(this);
        this.transferChange = this.transferChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state: State;

    onSubmit: Function;
    onSubmit(event) {
        event.preventDefault();
    }

    varChange: Function;
    varChange(varName: string, val: string) {
        const obj = {};
        obj[varName] = val;
        this.setState(obj);
    }

    transferChange: Function;
    transferChange(transferId: number, varName: string, val: string) {
    }

    render() {
        return (
            /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
            <Form
                formClass={styles.root}
                submit={this.onSubmit}
            >

                <ul style={{ display: 'flex', flexFlow: 'row nowrap', listStyleType: 'none', color: 'red' }}>
                    <li>мыло: {this.state.email}</li>
                    <li>  --тел: {this.state.phone}</li>
                    <li>  --пол: {this.state.gender}</li>
                    <li>  --Ф: {this.state.lastname}</li>
                    <li>  --И: {this.state.firstname}</li>
                    <li>  --О: {this.state.middlename}</li>
                    <li>  --ДР: {this.state.birthday}</li>
                    <li>  --гр: {this.state.citizenship}</li>
                    <li>  --№: {this.state.serialnumber}</li>
                    <li>  --истеч: {this.state.expired}</li>
                </ul>

                <h2>Контактная информация для заказа</h2>

                <EmailPhone
                    email={this.state.email}
                    phone={this.state.phone}
                    varChange={this.varChange}
                />

                <a className={styles.fillingexamples} href="javascript">Примеры заполнения</a>
                <h2 className={styles.travelers}>Данные пассажиров для оформления билетов</h2>

                <PassportData
                    gender={this.state.gender}
                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    birthday={this.state.birthday}
                    citizenship={this.state.citizenship}
                    serialnumber={this.state.serialnumber}
                    expired={this.state.expired}
                    varChange={this.varChange}
                />

                {Object.keys(this.state.transfers).map(transferId => (
                    <Transfer
                        key={transferId}
                        transferId={transferId}
                        data={this.state.transfers[transferId]}
                        transferChange={this.transferChange}
                    />
                    )
                )}
            </Form>
            /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
        );
    }
}

export default OrderInfo;

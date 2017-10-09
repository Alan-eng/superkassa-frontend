// @flow

import React from 'react';
import type { SyntheticInputEvent } from 'flow';
/* eslint-enable import/extensions */
import LabeledInput from '../../../../components/Form/LabeledInput';
import LogoGenderMale from './svg/logo-gender-male.svg';
import LogoGenderFemale from './svg/logo-gender-female.svg';
import styles from './index.css';

type Props = {
    gender: string,
    firstname: string,
    middlename: string,
    lastname: string,
    birthday: string,
    citizenship: string,
    serialnumber: string,
    expired: string,
    varChange: Function,
};

class PassportData extends React.Component<void, Props, void> {

    constructor(props: Props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change: Function;
    change(event: SyntheticInputEvent) {
        this.props.varChange(event.target.name, event.target.value);
    }

    render() {
        const maleClass: string = `${this.props.gender === 'M' ? styles.selectedGenderButton : styles.genderButton}`;
        const femaleClass: string = `${this.props.gender === 'F' ? styles.selectedGenderButton : styles.genderButton}`;
        /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
        return (
            <div className={styles.root}>
                <div className={styles.row}>
                    <div className={styles.genderroot}>
                        <div>Пол</div>
                        <button
                            className={maleClass}
                            onClick={() => { this.props.varChange('gender', 'M'); }}
                        >
                            <object
                                data={LogoGenderMale}
                                alt="Male"
                            />
                        </button>
                        <button
                            className={femaleClass}
                            onClick={() => { this.props.varChange('gender', 'F'); }}
                        >
                            <object
                                data={LogoGenderFemale}
                                alt="Female"
                            />
                        </button>
                    </div>
                    <LabeledInput
                        className={'lastname'}
                        type="text"
                        label={'Фамилия'}
                        id={'lastname'}
                        name={'lastname'}
                        defaultValue={this.props.lastname}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'firstname'}
                        type="text"
                        label={'Имя'}
                        id={'firstname'}
                        name={'firstname'}
                        defaultValue={this.props.firstname}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'middlename'}
                        type="text"
                        label={'Отчество'}
                        id={'middlename'}
                        name={'middlename'}
                        defaultValue={this.props.middlename}
                        onChange={this.change}
                    />
                </div>
                <div className={styles.row}>
                    <LabeledInput
                        className={'birthday'}
                        type="text"
                        label={'Дата рождения'}
                        id={'birthday'}
                        name={'birthday'}
                        defaultValue={this.props.birthday}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'citizenship'}
                        type="text"
                        label={'Гражданство'}
                        id={'citizenship'}
                        name={'citizenship'}
                        defaultValue={this.props.citizenship}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'serialnumber'}
                        type="text"
                        label={'Серия и номер документа'}
                        id={'serialnumber'}
                        name={'serialnumber'}
                        defaultValue={this.props.serialnumber}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'expired'}
                        type="text"
                        label={'Срок действия'}
                        id={'expired'}
                        name={'expired'}
                        defaultValue={this.props.expired}
                        onChange={this.change}
                    />
                </div>
            </div>
        );
        /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
}

export default PassportData;

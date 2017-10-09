// @flow

import React from 'react';
import type { SyntheticInputEvent } from 'flow';
/* eslint-enable import/extensions */
import LabeledInput from '../../../../components/Form/LabeledInput';
import styles from './index.css';

type Props = {
    data: any,
    transferId: numeric,
    transferChange: Function,
};

class Transfer extends React.Component<void, Props, void> {

    constructor(props: Props) {
        super(props);
    }

    change: Function;
    change(event: SyntheticInputEvent): void {
        this.props.transferChange(event.target.name, event.target.value);
    }

    render() {
        const {
            title,
            price,
            from,
            to,
            carTime,
            welcomeCaption,
            destinationAddress,
            comment,
        } = this.props.data;

        return (
            /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
            <div className={styles.root}>
                <div className={styles.header}>
                    <label htmlFor={`price_${this.props.transferId}`} className={styles.price}>
                        <input id={`price_${this.props.transferId}`} type="checkbox" />
                        {price}
                    </label>
                    <p>
                        {title}
                    </p>
                </div>
                <div className={styles.row}>
                    <LabeledInput
                        className={'from'}
                        type="text"
                        label={'Откуда'}
                        id={'from'}
                        name={'from'}
                        defaultValue={from}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'to'}
                        type="text"
                        label={'Куда'}
                        id={'to'}
                        name={'to'}
                        defaultValue={to}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'to2'}
                        type="text"
                        label={'Автомобиль'}
                        id={'to2'}
                        name={'to2'}
                        defaultValue={to}
                        onChange={this.change}
                    />
                </div>
                <div className={styles.row}>
                    <LabeledInput
                        className={'cartime'}
                        type="text"
                        label={'Время подачи'}
                        id={'cartime'}
                        name={'carTime'}
                        defaultValue={carTime}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'welcomecaption'}
                        type="text"
                        label={'Надпись на табличке'}
                        id={'welcomecaption'}
                        name={'welcomecaption'}
                        defaultValue={welcomeCaption}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'destinationaddress'}
                        type="text"
                        label={'Адрес назначения'}
                        id={'destinationaddress'}
                        name={'destinationaddress'}
                        defaultValue={destinationAddress}
                        onChange={this.change}
                    />
                    <LabeledInput
                        className={'comment'}
                        type="text"
                        label={'Примечания'}
                        id={'comment'}
                        name={'comment'}
                        defaultValue={comment}
                        onChange={this.change}
                    />
                </div>
            </div>
        );
        /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
}

export default Transfer;

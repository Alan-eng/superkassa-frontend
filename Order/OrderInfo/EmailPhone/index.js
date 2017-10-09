// @flow

import React from 'react';
import type { SyntheticInputEvent } from 'flow';
/* eslint-enable import/extensions */
import LabeledInput from '../../../../components/Form/LabeledInput';
import styles from './index.css';

type Props = {
    email: string,
    phone: string,
    varChange: Function,
};

class EmailPhone extends React.Component<void, Props, void> {

    constructor(props: Props) {
        super(props);
        this.change = this.change.bind(this);
    }

    change: Function;
    change(event: SyntheticInputEvent) {
        this.props.varChange(event.target.name, event.target.value);
    }

    props: Props;

    render() {
        /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
        return (
            <div className={styles.root}>
                <LabeledInput
                    style={{ color: 'red' }}
                    className={''}
                    type="email"
                    label={'Email'}
                    id={'email'}
                    name={'email'}
                    defaultValue={this.props.email}
                    onChange={this.change}
                />
                <LabeledInput
                    className={''}
                    type="tel"
                    label={'Телефон'}
                    id={'phone'}
                    name={'phone'}
                    defaultValue={this.props.phone}
                    onChange={this.change}
                />
                <div>
                    order.whyneededemail
                </div>
            </div>
        );
        /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
    }
}

export default EmailPhone;

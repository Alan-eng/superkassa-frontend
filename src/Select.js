import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.button`
display: flex;
align-items: center;
position: relative;
background: grey;
font-size: 18px;
cursor: pointer;

outline: none;
border: none;
`
const SelectLabel = styled.div`
padding: 10px;
`
const Ul = styled.ul`
text-align: left;
position: absolute;
top: 100%;
width: 100%;
background: #fff;
z-index: 3;
list-style: none;
padding: 0;
`
const Li = styled.li`
padding-left: 10px;
padding-bottom: 5px;
`

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            currentOption: '',
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleLabelStyle = this.handleLabelStyle.bind(this);
    }

    selectValue (){
        this.setState({currentOption: this.refs.selector.value})
    }

    handleDropdown () {
        this.setState({
            opened: !this.state.opened,
        })
    }

    render () {
        return(
        <Wrapper>
            <SelectLabel type='text' ref = 'selector' onClick = {(e) => {this.handleDropdown()}} onChange = {(e) => {this.selectValue()}} value = {this.state.currentOption}>
               Dropdown
            </SelectLabel>
            <div onClick = {(e) => {this.handleDropdown()}}>{ this.state.opened ? '\u25B2': '\u25BC'} </div>
            {this.state.opened && 
            <Ul>
                <Li>Лондон</Li>
                <Li>Париж</Li>
                <Li>НьюЙорк</Li>
                <Li>Сан-Франциско</Li>
                <Li>Джерси</Li>
            </Ul>}
        </Wrapper>
        )
    }
}


// class Input extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentOption: '',
//         }
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleLabelStyle = this.handleLabelStyle.bind(this);
//     }

//     selectValue (){
//         this.setState({currentOption: this.refs.selector.value})
//         // console.log(this.refs.selector.value)
//     }

//     render () {
//         return(<Wrapper>
//             <Select type='text' ref = 'selector' onChange = {(e) => {this.selectValue()}} value = {this.state.currentOption}>
//                 <option value=''></option>
//                 <option value='us'>United States</option>
//                 <option value='fr'>France</option>
//                 <option value='ca'>Canada</option>
//             </Select>
//             <label>Country</label>
//         </Wrapper>
//         )
//     }
// }

// const Input = () => {
//     return(<Wrapper>
//         <select type='text'>
//             <option value=''></option>
//             <option value='us'>United States</option>
//             <option value='fr'>France</option>
//             <option value='ca'>Canada</option>
//         </select>
//         <label>Country</label>
//     </Wrapper>
//     )
// }

export default Select 
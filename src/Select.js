import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
display: flex;
align-items: center;
position: relative;
background: grey;
font-size: 18px;
`
const Select = styled.div`
padding: 10px;
`

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentOption: '',
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleLabelStyle = this.handleLabelStyle.bind(this);
    }

    selectValue (){
        this.setState({currentOption: this.refs.selector.value})
        // console.log(this.refs.selector.value)
    }

    render () {
        return(
        <Wrapper>
            <Select type='text' ref = 'selector' onChange = {(e) => {this.selectValue()}} value = {this.state.currentOption}>
                {/* <option value=''></option>
                <option value='us'>United States</option>
                <option value='fr'>France</option>
                <option value='ca'>Canada</option> */}
               Dropdown
            </Select>
            <div>&#9660;</div>
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

export default Input 
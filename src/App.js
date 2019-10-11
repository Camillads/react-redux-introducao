import React from 'react';
import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { clickButton, newValue } = this.props;

    const { inputValue } = this.state;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input 
        onChange={this.inputChange} 
        type='text' 
        value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

//  transforma um trecho do estado da Store em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

// converter a Action Creator clickButton que criamos
// no arquivo src/actions/index.js em uma prop para o componente. 
const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

// conexão com a Store
export default connect(mapStateToProps, mapDispatchToProps)(App);

// Ao clicar no botão Click me!, o valor do state inputValue que foi alterado pelo input text 
// é enviado à Store pelo método clickButton, que foi mapeado no componente como prop.
import React, { Component } from 'react'

import TodoList from './TodoList';
import Itens from './Itens';

class App extends Component {
  constructor (){
    super()
    this.state = {
      itens: [],
      currentItem: {text:'', key:''},
    }
  }

  deleteItem = key => {
    const itensFiltrados = this.state.itens.filter(item=> {
      return item.key !== key
    })
    this.setState({
      itens: itensFiltrados,
    })
  }
  
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== ''){
      console.log(newItem)
      const itens = [...this.state.itens, newItem]
      this.setState({
        itens: itens,
        currentItem: {text:'',key:''},
      })
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = {text:itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }

  render() {
    return (
      <div className="App">
      <TodoList addItem={this.addItem} 
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItem}        
      />
      <Itens entries={this.state.itens} deleteItem={this.deleteItem} />
      </div>
    )
  }
}
export default App

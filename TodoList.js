import React, { Component } from 'react'
class TodoList extends Component {
    componenteDidUpdate(){
        this.props.inputElement.current.focus()
    }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
            <h1>Lista de Afazeres - Falqon</h1>
          <form onSubmit={this.props.addItem}>
        
            <input  placeholder="Titulo da Tarefa"
                    ref={this.props.inputElement} 
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}        
            />
           
            <button type="submit"> Adcionar </button>
          </form>
        </div>
      </div>
    )
  }
}export default TodoList
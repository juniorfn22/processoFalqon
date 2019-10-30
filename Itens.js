import React, { Component } from 'react'

import '../src/index.css'

class Itens extends Component {
    criarTarefas =item =>{
      return <li key={item.key} onClick={()=>
            this.props.deleteItem(item.key)}>
            {item.text}
            </li>
    }
    

    render (){
      const entradas = this.props.entries
      const listarItens = entradas.map(this.criarTarefas)
        
      
      return <ul className="entradas">{listarItens}</ul>
    }
}
export default Itens
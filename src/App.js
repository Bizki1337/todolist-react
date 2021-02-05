import React, { Component } from 'react'
import './App.css';

import Componentz from './Componentz'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  regroup = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    const keyItem = this.state.currentItem.key
    console.log(newItem)
    if (newItem !== "") {
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem = key => {
    const filteredItem = this.state.items.filter( item => item.key !== key)
    this.setState({
      items: filteredItem
    })
  }

  render() {
    return (
      <div className="App">
        <form className="App_form"
          onSubmit={this.addItem}
        >
          <input 
            type="text"
            placeholder="Enter text"
            value={this.state.currentItem.text}
            onChange={this.regroup}
          />
          <button>Add</button>
        </form>

        <Componentz 
          items={this.state.items}
          deleteItem={this.deleteItem}
        />

      </div>
    );
  }
}

export default App;

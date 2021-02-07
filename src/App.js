import React, { Component } from 'react'
import './App.css';

import List from './List'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        time: ''
      }
    }
  }

  regroup = e => {

    const date = new Date()
    let dateHours = date.getHours()
    let dateMinutes = date.getMinutes()

    if (dateMinutes < 10) {
      dateMinutes = "0" + dateMinutes
    }

    let string_dateHours = String(dateHours)
    let string_dateMinutes = String(dateMinutes)

    // После условия когда минут меньше 9
    // dateMinutes превращается в строку, поэтому пришлось и часы переводить в стркоу
    // чтобы не было разницы в типах переменных

    const time = string_dateHours + ":" + string_dateMinutes


    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        time: time
      }
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem

    if (newItem !== "") {
      const newItems = [...this.state.items, newItem]

      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          time: ''
        },
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

        <List 
          items={this.state.items}
          deleteItem={this.deleteItem}
        />

      </div>
    );
  }
}

export default App;

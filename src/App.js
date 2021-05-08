
import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        ke:''
      }
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  render(){
    return(
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter tex"
          value={this.state.currentItem}/>
          onChnage={this.handleInput}
          <button type="submit">Add</button>
        </form>
      </header>
      </div>
    )
  }
}

export default App;

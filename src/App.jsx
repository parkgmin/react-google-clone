import React from "react";
import TodoItem from "./TodoItem";

import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClickRemove = index => {
    this.setState(
      state => ({
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      }),
    );
  }

  change = (e, input) => {
    const items = this.state.items;
    items[e] = input;
    this.setState({
      items
    });
  }

  render() {
    return (
      <div>
         <head>
            <div  className="title">당신의 일정을 입력하여 주세요!</div>
         </head>  
            <div className="barColor">
              <input type="text" onChange={this.onChange} style={{height:"100%", width:"100%"}}/>
              <button onClick={this.onClickAdd} style={{minWidth:"100px"}}>추가</button>
            </div>
            {this.state.items.map((value, idx) => (
              <TodoItem key={idx} index={idx} value={value} handleClickRemove={this.handleClickRemove} change={this.change} />
            ))}
          </div>
       
    );
  }
}
export default App;
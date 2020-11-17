import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {set, evaluate, deleteLastEntry, clear} from "./redux/actions.js";

class App extends Component {
  render() {
    const btns = [ "7", "8", "9", "C",
                   "4", "5", "6", "/",
                   "1", "2", "3", "*",
                   "0", ".", "+", "-",
                   "<-", "=" ];

    const { set, evaluate, deleteLastEntry, clear} = this.props;

    return (
      <div className="App">
        <div className="result">
          <input type="text" value={this.props.expression} />
        </div>
        <div className="buttons">
          {
            // creates keyboard buttons and sets up theirs onClick methods
            btns.map((item, key) => {
              if(item === "C"){
                return(
                  <button onClick={ clear.bind(this) } key={key}>{item}</button>
                )
              } else if(item === "="){
                return(
                  <button onClick={ evaluate.bind(this) } key={key}>{item}</button>
                )
              } else if(item === "<-"){
                return(
                  <button onClick={ deleteLastEntry.bind(this) } key={key}>{item}</button>
                )
              } else {
                return(
                  <button onClick={ set.bind(this, item) } key={key}>{item}</button>
                )
              }
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    expression: state.expression
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    set: (key) => dispatch(set(key)),
    evaluate: () => dispatch(evaluate()),
    deleteLastEntry: () => dispatch(deleteLastEntry()),
    clear: () => dispatch(clear())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

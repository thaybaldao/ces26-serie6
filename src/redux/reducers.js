import * as types from "./types";

let initialState = {
  expression: ""
};

let exp = "";

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPRESSION:
      return{
        expression: state.expression + action.payload
      };
      
    case types.EVALUATE_EXPRESSION:
      exp = state.expression;
      if (exp.length > 0 && isNaN(exp[0])) {
        exp=""
      }

      if (!isNaN(exp[exp.length-1])) {
        try{
          exp = eval(exp).toString();
        } catch (error) {
          console.error(error);
        }
      }

      return{
        expression: exp
      };

    case types.DELETE_LAST_ENTRY:
      exp = state.expression;
      if(exp.length > 0){
        exp = exp.substring(0, exp.length - 1);
      }

      return{
        expression: exp
      };

    case types.CLEAR_EXPRESSION:
      return{
        expression: ""
      };

    default:
      return state;
  }
};

export default calculatorReducer;

import { createStore} from 'redux';
import calculatorReducer from './reducers'
function configureStore(){
    return createStore(calculatorReducer);
}

export default configureStore;

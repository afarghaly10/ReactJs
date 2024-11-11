const redux = require('redux');

// reducer function
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
}

// store initialization
const store = redux.createStore(counterReducer);

// subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log('----------------------------');
		console.log(`lastestState: >> `, latestState);
		console.log('----------------------------');
}

// subscription- function to be called whenever the state changes
store.subscribe(counterSubscriber);

// dispatching an action
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});

// Output: { counter: 1 }

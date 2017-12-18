import { createStore } from 'redux';

//Action Generators 

// const incrementCount = ( payload = {} ) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

//the same as above using destracturing object, using default value for object as empty object (if we don't sent 
//any parameter) and default value for incrementBy as 1 (if type of is not a number)

const incrementCount = ( {incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy //:incrementBy
})

const decrementCount = ( {decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( {count} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


//Reducers
//1. They are pufe functions - what it return only depends on what are inputs
//2. Never change state or action

const countReducer = (state = { count: 0 }, action ) => { //state is the current state, if it's not defined it takes default value declared here
    switch (action.type) {
        case 'INCREMENT':
        //const incrementBy = typeof(action.incrementBy) === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy 
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState()); //return current state
});

store.dispatch({
    type: "INCREMENT", //name of the action
    incrementBy: 5
}); //sent object to the store 
//Action is the object

//unsubscribe(); //cause store.subscribe stop  

store.dispatch(incrementCount( {incrementBy: 15} ));

store.dispatch(incrementCount());

store.dispatch(decrementCount( {decrementBy: 10} ));

store.dispatch(decrementCount()); 

store.dispatch(resetCount()); 

store.dispatch(setCount( {count: 101} )); 

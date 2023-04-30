//console.log('hello');

const redux = require('redux');     
const { legacy_createStore } = require('redux');


//console.log(redux);
console.log('legacy_createStore --->',legacy_createStore);


//1. Actions (Actions are js object which must contain "type" property and may contain payload )


//2. ActionCreator (ActionsCreator are function which return actions )

//lets define some action creators

/*let login = ()=>{
    return{
        type:"LOGIN",
        payload:{
            username:"GAUTAM",
            password:"123456"
        }
    }
}

let logout = ()=>{
    return{
        type:"LOGOUT"
    }
}*/

let AddValueBy1 = ()=>{
    return{
        type:"AddValueBy1",
        payload:{
            value:1
        }
    }
}

let SubValueBy1 = ()=>{
    return{
        type:"SubValueBy1",
        payload:{
            value:1
        }
    }    
}


//3. ReducerFunction 
/*
    Accept
    1.OldState
    2.Actions
    return new State
*/

let oldState = {
    value:0
}

//lets define the reducers function
const rootReducer = (state=oldState,action)=>{
    let newState = oldState;
    switch(action.type){
        case 'AddValueBy1':
            return{
                ...newState,
                value: newState.value + action.payload.value
            }
            break;
        case '':
            break;
        case '':
            break;
            default:
    }
    return newState;

}


//4. Store Global Object

//lets create the store object

let storeObject = legacy_createStore(rootReducer)

console.log("storeObject --->",storeObject);

console.log("currentState before dispatch --->",storeObject.getState());

console.log("AddValueBy1 --->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1 --->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1 --->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1 --->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1 --->",storeObject.dispatch(AddValueBy1()));

console.log("currentState after dispatch --->",storeObject.getState())
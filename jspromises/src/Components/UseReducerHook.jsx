import {useReducer, useState} from "react";

const initialState = [];

function reducer(state, action) {
    switch (action.type){
        case "add":
            return[...state, action.payload];
        case "delete":
            return state.filter((contact) => {
                return action.payload.id !== contact.id;
            });
    }

}


function UseReducerHook(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [state, dispatch] = useReducer(reducer,initialState,
        ()=> {return({userId:Date.now(), name:"", email:""})});



    return(
        <>
            <h1>useReducer Hook.</h1>
        </>
    );
}

export default UseReducerHook;
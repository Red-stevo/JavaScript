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

const initializer = ()=> {return({userId:Date.now(), name:"", email:""})}

function UseReducerHook(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [state, dispatch] = useReducer(reducer,initialState,initializer);

    const addContact = () => {

    }

    return(
        <>
            <h1>useReducer Hook.</h1>
            <form onSubmit={addContact}>
                <input type={"text"} placeholder={"Contact name"} value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>

                <input type={"text"} placeholder={"email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <button type={"submit"}>Add contact</button>
            </form>

        </>
    );
}

export default UseReducerHook;
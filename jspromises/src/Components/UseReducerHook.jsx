import {useReducer, useState} from "react";

const initialState = [];

function reducer(state, action) {
    switch (action.type){
        case "add":
            return[...state, action.payload];
        case "delete":
            return state.filter((contact) => {
                return action.payload.id !== contact.userId;});
        case "update":
            return state.map((contact) => {
                if(contact.userId === action.payload.userId){
                    contact.name = action.payload.name;
                    contact.email = action.payload.email;
                }
                return contact;
            });
    }
}

const initializer = ()=> {return([{userId:Date.now(), name:"stephen ", email:"step@gmail.com"}])}

function UseReducerHook(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [state, dispatch] = useReducer(reducer,initialState,initializer);
    const [edit, setEdit] = useState(false);

    const addContact = (e) => {
        e.preventDefault();

        const contact = {userId:Date.now(), name:userName, email};

        //cleanup
        setEmail("");
        setUserName("");

        dispatch({type:"add", payload:contact});
    }
    const updateState = (e) => {
        e.preventDefault();

        {dispatch({type:"update", payload:{userId:Date.now(), name:userName, email}})}
        //cleanup
        setEmail("");
        setUserName("");
    }
    const editMode = (e, contact) => {
        e.preventDefault();

        setEmail(contact.email);
        setUserName(contact.name);
    }

    return(
        <>
            <h1>useReducer Hook.</h1>
            <form onSubmit={addContact}>
                <input type={"text"} placeholder={"Contact name"} value={userName}
                       onChange={(e) => setUserName(e.target.value)}/>

                <input type={"text"} placeholder={"email"} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                {!edit ? <button type={"submit"}>Add contact</button> : <button type={"button"}
                onClick={(e) => updateState(e)}>
                    update</button>}
            </form>

            <div>
                <ol>
                    {state.map((contact) => {
                        return(
                            <li key={contact.userId}>
                            <h2>{contact.name}</h2>
                            <h2>{contact.email}</h2>
                            <button onClick={() => {dispatch({type:"delete", payload:{id:contact.userId}})}}>
                                Delete</button>
                            <button onClick={(e) => editMode(e, contact)}
                            >edit</button>
                        </li>);
                    })}
                </ol>
            </div>

        </>
    );
}

export default UseReducerHook;
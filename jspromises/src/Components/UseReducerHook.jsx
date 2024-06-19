import {useReducer, useState} from "react";

const initialState = [];

function reducer(state, action) {
    switch (action.type){
        case "add":
            return[...state, action.payload];
        case "delete":
            return state.filter((contact) => {
                return action.payload.id !== contact.userId;
            });
    }

}

const initializer = ()=> {return([{userId:Date.now(), name:"stephen ", email:"step@gmail.com"}])}

function UseReducerHook(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [state, dispatch] = useReducer(reducer,initialState,initializer);

    const addContact = (e) => {
        e.preventDefault();

        const contact = {userId:Date.now(), name:userName, email}

        //cleanup
        setEmail("");
        setUserName("");

        dispatch({type:"add", payload:contact});
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

            <div>
                <ol>
                    {state.map((contact) => {
                        return(
                            <li key={contact.userId}>
                            <h2>{contact.name}</h2>
                            <h2>{contact.email}</h2>
                            <button onClick={() => {dispatch({type:"delete", payload:{id:contact.userId}})}}>
                                Delete</button>
                        </li>);
                    })}
                </ol>
            </div>

        </>
    );
}

export default UseReducerHook;
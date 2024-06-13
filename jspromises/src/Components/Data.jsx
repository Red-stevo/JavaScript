import {getData} from "../Utils/endpoints.js";
import {useEffect, useState} from "react";

const Data = () => {
    const [hello, setHello] = useState("");
    const [code, setCode] = useState("");

    const setData = (response) => {
       setCode(response.data.code);
       setHello(response.data.hello);
    }

    const handleError = (error) =>{
        console.log(`an error occurred. ${error}`)
    }

    useEffect(() => {
        getData()
            .then(setData)
            .catch(handleError)
    }, []);


    return (
        <div>
            {<h2>{code}</h2>}
            {<h2>{hello}</h2>}
        </div>
    );
};

export default Data;
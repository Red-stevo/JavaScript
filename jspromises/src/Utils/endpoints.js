import axios from "axios";

export async function getData(){
    return await axios.get("https://hellosalut.stefanbohacek.dev/?moda=auto");
}

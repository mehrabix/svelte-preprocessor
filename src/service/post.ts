import { writable } from "svelte/store";

export const apiData = writable([])
const fetchApi = async () =>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
        apiData.set(data)
    }).catch(err => console.log(err))
};
fetchApi();
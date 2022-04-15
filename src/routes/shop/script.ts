import {apiData} from '../../service/post'
import { onMount } from 'svelte';


let postData = [];

onMount(async () => {
    loadData();
});


const loadData = () =>{
    apiData.subscribe(data => {
        postData = data;
        console.log(postData);
    });
}


export {}
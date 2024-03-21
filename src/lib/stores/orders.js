import { writable} from "svelte/store";
import { browser } from "$app/environment";
const storedefault = JSON.stringify ( [

]
)
const initialvalue =  browser ? window.localStorage.getItem("orders") ?? storedefault : storedefault
const orders = writable(initialvalue)
orders.subscribe((value)=>{
    if(browser){
        console.log (value)
        localStorage.setItem("orders", value) 
    }
})
export default orders
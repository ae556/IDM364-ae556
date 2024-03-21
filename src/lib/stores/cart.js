import { writable} from "svelte/store";
import { browser } from "$app/environment";
const storedefault = JSON.stringify ( {
    items: []
})
const initialvalue =  browser ? window.localStorage.getItem("cart") ?? storedefault : storedefault
const cart = writable(initialvalue)
cart.subscribe((value)=>{
    if(browser){
        console.log (value)
        localStorage.setItem("cart", value) 
    }
})
export default cart
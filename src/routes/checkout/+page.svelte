<script>
import {browser}from "$app/environment"
import {nanoid} from "nanoid"
 import cart_store from "$lib/stores/cart" 
 import orders_store from "$lib/stores/orders"
 const cart_parse = JSON.parse($cart_store)
 const orders_parse = JSON.parse($orders_store)
 const cart_items = cart_parse.items
 console.log (cart_parse)
const handleCheckoutCart = () => {
    const orderid = nanoid()
    orders_parse.push({...cart_parse, id:orderid})
    orders_store.set(JSON.stringify(orders_parse))
console.log($orders_store)
cart_store.set(JSON.stringify({items:[]}))
location.href = `/orders/${orderid}`
}


</script>
<div>
    <h1>Checkout</h1>
   
        {#if browser} 
        <div>
        {#each cart_items as item}
        <div>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
        </div>
        {/each} 
        </div>
        <div>
            <header>
                <h2>
                    Total Price: {cart_items.reduce((a,item)=> a+item.price, 0)}
                </h2>
            </header>
            <div>
                <button on:click={() => location.href = "/albums"}>
                    Back to Shop
                </button>
                <button on:click={handleCheckoutCart}>
                    Checkout
                </button>
            </div>
        </div>
        {/if}
</div>


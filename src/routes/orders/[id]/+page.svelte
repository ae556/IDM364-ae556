<script>
    export let data
import {browser}from "$app/environment"
 import orders_store from "$lib/stores/orders" 
 const orders_parse = JSON.parse($orders_store)
 const foundOrder = orders_parse.find((order) => {
    return order.id === data.order.id
 })
 console.log (foundOrder) 
</script>
<div>
    <header>
        <h2>
            Order Details
        </h2>
    </header>
    {#if browser && foundOrder} 
        <div>
        {#each foundOrder.items as item}
        <div>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
        </div>
        {/each} 
        </div>
        <div>
            <header>
                <h2>
                    Total Price: {foundOrder.items.reduce((a,item)=> a+item.price, 0)}
                </h2>
            </header>
           
        </div>
        {/if}
        <div>
            <button on:click={() => location.href = "/orders"}>
               See All orders
            </button>
            
        </div>
</div>
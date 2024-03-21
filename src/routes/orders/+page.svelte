<script>
import {browser}from "$app/environment"
 import orders_store from "$lib/stores/orders" 
 const orders_parse = JSON.parse($orders_store)
 
</script>
<div>
    <header>
        <h2>
            Order Details
        </h2>
    </header>
    {#if browser}
    {#each orders_parse as order} 
    <div>
        <h3>Order Details</h3>
    </div>
    <div>
        <h4>Order Id: {order.id}</h4>
    </div>
        <div>
        {#each order.items as item}
        <div>
            <h3>{item.title}</h3>
            <h4>{item.price}</h4>
        </div>
        {/each} 
        </div>
        <div>
            <header>
                <h2>
                    Total Price: {order.items.reduce((a,item)=> a+item.price, 0)}
                </h2>
            </header>
           
        </div>
        {/each}
        {/if}
</div>
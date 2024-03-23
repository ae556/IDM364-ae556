<script>
import cart_store from "$lib/stores/cart"
export let data;
console.log (data)    
console.log ($cart_store)
const cart_parse = JSON.parse ($cart_store)
const handle_add_album_to_cart = () =>{
    const updated_cart = {
        items: [
            ...cart_parse.items,
            data.album
        ]
    }
    cart_store.set (JSON.stringify(updated_cart))
    console.log ($cart_store)
}
</script>

<div class="container">
    <h1>Details</h1>
    <div>
        {#if data.album}
        <div>
            <h3>Title: {data.album.title}</h3>
        </div>
    <div>
            <img src={data.album.album_img_url} alt={data.album.title}>
        </div>
        <div class="details-container">
            <h4>Artist: {data.album.artist}</h4>
            <h4>Genre: {data.album.genre}</h4>
            <h4>Price: {data.album.price}</h4>  
        <div>
            <button class="default-button" on:click={handle_add_album_to_cart}>Add to Cart</button>
            <button class="default-button" on:click={() => location.href = "/checkout"}>Checkout</button>
        </div>
    </div>
        {/if}
    </div>
</div>
<style>
    .container{
        display:flex;
        flex-direction: column;
        align-items: center;
        font-family: Helvetica, sans-serif;
    }
    .details-container{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    
    .default-button {
        background-color: #0fc439; 
        color: white;
        padding: 0.5rem 1rem; 
        border: none;
        border-radius: 0.3125rem; 
        cursor: pointer;
        font-size: 1rem; 
    }

    .default-button:hover {
        background-color: #0a8a2a; 
    }
    img{
        border-radius: 0.5rem;
        border: 3px solid;

    }
</style>
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

<div>
    <h1>Details</h1>
    <div>
        {#if data.album}
        <div>
            <h3>Title: {data.album.title}</h3>
        </div>
        <div>
            <img src={data.album.album_img_url} alt="">
        </div>
        <div>
            <h4>Artist: {data.album.artist}</h4>
            <h4>Genre: {data.album.genre}</h4>
        </div>
        <div>
            <h4>Price: {data.album.price}</h4>
            <button on:click={handle_add_album_to_cart}>Add to Cart</button>
            <button on:click={() => location.href = "/checkout"}>Checkout</button>
        </div>
        {/if}
    </div>
</div>
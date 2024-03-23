<script>
  import { browser } from '$app/environment'
  import { nanoid } from 'nanoid'
  import cart_store from '$lib/stores/cart'
  import orders_store from '$lib/stores/orders'
  const cart_parse = JSON.parse($cart_store)
  const orders_parse = JSON.parse($orders_store)
  const cart_items = cart_parse.items
  console.log(cart_parse)
  const handleCheckoutCart = () => {
    const orderid = nanoid()
    orders_parse.push({ ...cart_parse, id: orderid })
    orders_store.set(JSON.stringify(orders_parse))
    console.log($orders_store)
    cart_store.set(JSON.stringify({ items: [] }))
    location.href = `/orders/${orderid}`
  }
</script>

<div class="container">
  <h1>Checkout</h1>

  {#if browser}
    <div>
      <table>
        <thead>
        
          <tr>
            <th>Title</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {#each cart_items as item}
            <tr>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="container">
      <header>
        <h2>Total Price: {cart_items.reduce((a, item) => a + item.price, 0)}</h2>
      </header>
      <div>
        <button class="default-button" on:click={() => (location.href = '/albums')}>Back to Shop</button>
        <button class="default-button" on:click={handleCheckoutCart}>Checkout</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .default-button {
    background-color: white;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica, sans-serif;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
  }
  th, td {
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: left;
  }
</style>

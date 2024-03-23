<script>
  export let data
  import { browser } from '$app/environment'
  import orders_store from '$lib/stores/orders'
  const orders_parse = JSON.parse($orders_store)
  const foundOrder = orders_parse.find((order) => {
    return order.id === data.order.id
  })
  console.log(foundOrder)
</script>

<div class="container">
  <header>
    <h1>Order Details</h1>
    <div>
      <button class="default-button secondary-button">
        <a href="/albums">Back to Home</a>
      </button>
    </div>
  </header>
  {#if browser && foundOrder}
    <div class="order-container">
      <div class="items-container">
        {#each foundOrder.items as item}
          <div class="item">
            <h3>{item.title}</h3>
            <h4>${item.price}</h4>
          </div>
        {/each}
      </div>
      <footer>
        <h2>
          Total Price: ${foundOrder.items.reduce(
            (a, item) => a + item.price,
            0,
          )}
        </h2>
      </footer>
    </div>
  {/if}
  <div>
    <button class="default-button" on:click={() => (location.href = '/orders')}>
      See All Orders
    </button>
  </div>
</div>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .container {
    margin: 0 auto;
    padding: 20px;
    max-width: 800px;
    font-family: Arial, sans-serif;
  }

  .order-container {
    border: 1px solid #ccc;
    border-radius: 0.3125rem; /* Rounded corners */
    padding: 1.25rem; /* Padding in rem */
    margin-bottom: 1.25rem; /* Margin bottom in rem */
  }

  .items-container {
    border-top: 1px solid #ccc;
    padding-top: 10px;
    margin-top: 10px;
  }

  .item {
    margin-bottom: 10px;
  }

  footer {
    margin-top: 20px;
    text-align: right;
  }

  .default-button {
    background-color: #0fc439;
    color: white !important;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    font-size: 1rem;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .default-button:hover {
    background-color: #0a8a2a;
  }
  .secondary-button {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  .secondary-button:hover {
    background-color: antiquewhite;
  }
</style>

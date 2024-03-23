<script>
  import { browser } from '$app/environment'
  import orders_store from '$lib/stores/orders'
  const orders_parse = JSON.parse($orders_store)
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
  {#if browser}
    {#each orders_parse as order}
      <div class="order-container">
        <h2>Order Id: {order.id}</h2>
        <div class="items-container">
          {#each order.items as item}
            <div class="item">
              <h3>{item.title}</h3>
              <h4>${item.price}</h4>
            </div>
          {/each}
        </div>
        <footer>
          <h2>
            Total Price: ${order.items.reduce((a, item) => a + item.price, 0)}
          </h2>
        </footer>
      </div>
    {/each}
  {/if}
</div>

<style>
    header{
        display: flex;
    align-items: center;
    justify-content: space-between;
    }
  .container {
    margin: 0 auto;
    padding: 1.25rem;
    max-width: 800px;
    font-family: Helvetica, sans-serif;
  }

  .order-container {
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    padding: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .items-container {
    border-top: 1px solid #ccc;
    padding-top:0.5rem;
    margin-top:0.5rem;
  }

  .item {
    margin-bottom:0.5rem;
  }

  footer {
    margin-top: 1.25rem;
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

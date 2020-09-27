<script>
  import CounterStore from "../store";

  let counterName = "Counter Name";
  let maxRows = 0;

  function generateCounterID() {
    return Math.floor(Math.random() * Math.floor(100000));
  }

  function addCounter() {
    CounterStore.set(
      [
        ...$CounterStore,
        {
          id: generateCounterID(),
          name: counterName,
          currentRows: 0,
          maxRows: maxRows
        }
      ]
    );
  }
</script>

<article class="w-56 bg-white border border-pink-200 border-opacity-50 shadow-sm rounded-sm p-6 text-center">
  <input class="w-full mb-6 p-2 border-bottom" bind:value={counterName}>
  <input class="w-full mb-6 p-2 border-bottom" type=number bind:value={maxRows} min=0>
  <button class="w-full bg-pink-200 text-white font-semibold rounded-sm py-2" on:click={addCounter}>Add New Counter</button>
</article>

<style>
  .border-bottom {
    border-bottom: 2px solid #fed7e2;
  }
</style>
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

<article class="px-8 py-2 md:w-1/4 md:px-2">
  <div class="bg-white border border-pink-200 border-opacity-50 shadow-sm rounded-sm px-3 py-6">
    <input class="w-full mb-5 p-2 border-bottom" bind:value={counterName}>
    <div class="flex mb-6 border-bottom">
      <label for="max-rows" class="w-2/5 text-xs text-pink-200 uppercase font-semibold self-end pb-2">Max Rows</label>
      <input id="max-rows" class="w-3/5 p-2" type=number bind:value={maxRows} min=0>
    </div>
    <button class="w-full bg-pink-200 text-white font-semibold rounded-sm py-2 tracking-widest uppercase text-sm" on:click={addCounter}>Add New Counter</button>
  </div>
</article>

<style>
  .border-bottom {
    border-bottom: 2px solid #fed7e2;
  }
</style>
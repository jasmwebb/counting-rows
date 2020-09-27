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

<article>
  <input bind:value={counterName}>
  <input type=number bind:value={maxRows} min=0>
  <button on:click={addCounter}>Add New Counter</button>
</article>
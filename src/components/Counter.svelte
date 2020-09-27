<script>
	import { fade } from 'svelte/transition';
	import CounterStore from "../store";

	export let counter;

	function addRow() {
		counter.currentRows += 1;
		$CounterStore = $CounterStore;
	}

	function removeRow() {
		counter.currentRows -= 1;
		$CounterStore = $CounterStore;
	}

	function resetRows() {
		counter.currentRows = 0;
		$CounterStore = $CounterStore;
	}

	function removeCounter() {
		$CounterStore = $CounterStore.filter(checkCounter => {
			if (checkCounter.id !== counter.id) return checkCounter;
		});
	}
</script>

<article transition:fade>
	<h2>{counter.name}</h2>
	<h3>Rows</h3>
	<p><span>{counter.currentRows}</span> / {counter.maxRows}</p>
	<button on:click={addRow} disabled={counter.currentRows === counter.maxRows}>+</button>
	<button on:click={removeRow} disabled={counter.currentRows === 0}>-</button>
	<button on:click={resetRows} disabled={counter.currentRows === 0}>Reset</button>
	<button on:click={removeCounter}>X</button>
</article>
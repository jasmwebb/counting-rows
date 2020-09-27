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

<article class="w-1/4 p-2" transition:fade>
	<div class="bg-white border border-pink-200 border-opacity-50 shadow-sm rounded-sm p-5 text-center">
		<h2>{counter.name}</h2>
		<hr class="my-2 bg-pink-200 no-border">
		<h3 class="text-pink-200 uppercase font-semibold">Completed Rows</h3>
		<p><span class="text-6xl">{counter.currentRows}</span> <span class="font-bold text-pink-200">/ {counter.maxRows}</span></p>
		<div class="flex my-1">
			<button class="bg-pink-200 text-white text-2xl font-bold rounded-sm py-2 flex-grow mr-1" on:click={addRow} disabled={counter.currentRows === counter.maxRows}>+</button>
			<button class="bg-pink-200 text-white text-2xl font-bold rounded-sm py-2 px-6" on:click={removeRow} disabled={counter.currentRows === 0}>-</button>
		</div>
		<div class="flex">
			<button class="bg-pink-200 text-white font-semibold rounded-sm px-4 py-1 flex-grow mr-1 tracking-widest uppercase text-sm" on:click={resetRows} disabled={counter.currentRows === 0}>Reset</button>
			<button class="bg-pink-200 text-white font-semibold rounded-sm px-4 py-1 tracking-widest uppercase text-sm" on:click={removeCounter}>Remove</button>
		</div>
	</div>
</article>

<style>
	.no-border {
		border: none;
		height: 0.15rem;
	}
</style>
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

	function editText(event) {
		$CounterStore = $CounterStore;
	}
</script>

<article class="px-8 py-2 md:w-1/4 md:px-2" transition:fade>
	<div class="bg-white border border-pink-200 border-opacity-50 shadow-sm rounded-sm p-5 text-center">
		<input class="w-full text-center" bind:value={counter.name} on:keydown={editText}>
		<hr class="my-2 bg-pink-200 no-border">
		<h3 class="text-pink-200 uppercase font-semibold">Completed Rows</h3>
		<p><span class="text-6xl">{counter.currentRows}</span> <span class="font-bold text-pink-200">/ {counter.maxRows}</span></p>
		<div class="flex my-1">
			<button class="w-3/4 bg-pink-200 text-white text-2xl font-bold rounded-sm py-2 mr-1" on:click={addRow} disabled={counter.currentRows === counter.maxRows}>+</button>
			<button class="w-1/4 bg-pink-200 text-white text-2xl font-bold rounded-sm py-2" on:click={removeRow} disabled={counter.currentRows === 0}>-</button>
		</div>
		<div class="flex">
			<button class="w-1/2 bg-pink-200 text-white font-semibold rounded-sm py-1 mr-1 tracking-widest uppercase text-sm" on:click={resetRows} disabled={counter.currentRows === 0}>Reset</button>
			<button class="w-1/2 bg-pink-200 text-white font-semibold rounded-sm py-1 tracking-widest uppercase text-sm" on:click={removeCounter}>Remove</button>
		</div>
	</div>
</article>

<style>
	.no-border {
		border: none;
		height: 0.15rem;
	}
</style>
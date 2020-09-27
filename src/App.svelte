<script>
	import Counter from "./components/Counter.svelte";
	import { countersStore } from "./store";

	$countersStore = [
		{
			id: 0,
			name: "Basket Rib",
			currentRows: 0,
			maxRows: 4
		},
		{
			id: 1,
			name: "Open Cable Diamond",
			currentRows: 0,
			maxRows: 22
		}
	];

	function addCounter() {
		$countersStore = [
			...$countersStore,
			{
				id: 2,
				name: "New Counter",
				currentRows: 0,
				maxRows: 10
			}
		];
			
		console.log($countersStore);
	}
</script>

<main>
	<button on:click={addCounter}>Add New Counter</button>

	{#each $countersStore as counter}
		<Counter {counter} />
	{/each}
</main>
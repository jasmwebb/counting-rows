<script>
	import Counter from "./components/Counter.svelte";
	import NewCounterForm from "./components/NewCounterForm.svelte";
	import CounterStore from "./store";
</script>

<main>
	{#each $CounterStore as counter}
		<Counter {counter} />
	{/each}

	<NewCounterForm />
</main>
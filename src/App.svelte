<script>
	import Counter from "./components/Counter.svelte";
	import NewCounterForm from "./components/NewCounterForm.svelte";
	import CounterStore from "./store";
</script>

<h1 class="text-center my-4 font-bold text-2xl uppercase text-pink-200 tracking-widest">Counting Rows</h1>

<main class="container horizontal-layout flex flex-col md:flex-row md:flex-no-wrap justify-center">
	{#each $CounterStore as counter}
		<Counter {counter} />
	{/each}

	<NewCounterForm />
</main>
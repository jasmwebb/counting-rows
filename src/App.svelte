<script>
	import Counter from "./components/Counter.svelte";
	import NewCounterForm from "./components/NewCounterForm.svelte";
	import CounterStore from "./store";
</script>

<h1 class="text-center my-6 font-bold text-2xl uppercase text-pink-200 tracking-widest">Counting Rows</h1>

<main class="container my-6 flex flex-wrap justify-center">
	{#each $CounterStore as counter}
		<Counter {counter} />
	{/each}

	<NewCounterForm />
</main>
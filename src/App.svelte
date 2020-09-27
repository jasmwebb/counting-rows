<script>
	import Counter from "./components/Counter.svelte";
	import NewCounterForm from "./components/NewCounterForm.svelte";
	import CounterStore from "./store";
</script>

<main class="container min-h-screen my-6 flex flex-wrap items-start justify-center space-y-6">
	{#each $CounterStore as counter}
		<Counter {counter} />
	{/each}

	<NewCounterForm />
</main>
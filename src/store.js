import { onDestroy } from "svelte";
import { writable } from "svelte/store";

const CounterStore = writable(JSON.parse(localStorage.getItem("CountingRowsData")) || []);
CounterStore.subscribe(value => localStorage.setItem("CountingRowsData", JSON.stringify(value)));

export default CounterStore;

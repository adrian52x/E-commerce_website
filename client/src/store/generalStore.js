import { writable } from 'svelte/store';

// store for Search
export let searchResult = writable(null);
export let searchResultLength = writable(null);
export let searchKeyword = writable(null);


export const baseURL = "http://localhost:3000";


import { writable } from 'svelte/store';

export const baseURL = "http://localhost:3000";

// store for Search
export let searchResult = writable(null);
export let searchResultLength = writable(null);
export let searchKeyword = writable(null);

// all products
export let allProducts = writable(null);

// User
export let authenticated = writable(false);
export let authenticatedUser = writable(null);

// Shopping cart
export let cart = writable([]);


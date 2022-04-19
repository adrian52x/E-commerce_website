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
export const cart = writable([]);
const store = localStorage.cart
cart.subscribe((value => localStorage.cart = JSON.stringify(value)))

// tried to store Cart data in localStorage but it is removed after page refresh - !!???



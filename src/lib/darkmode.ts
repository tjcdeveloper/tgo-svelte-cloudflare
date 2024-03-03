import { setContext } from 'svelte';
import { writable } from 'svelte/store';

const darkMode = writable(false);
setContext("darkMode", darkMode);

export function initDarkMode(): void {
	darkMode.set(isDarkMode());
	updateBodyDarkMode();
}

export function updateDarkMode(isDarkMode: boolean): void {
	darkMode.set(isDarkMode);
	storeDarkMode(isDarkMode);
	updateBodyDarkMode();
}

function isDarkMode(): boolean {
	const localData = window.localStorage.getItem("darkMode");
	if (localData) {
		return "true" === localData;
	}

	if (typeof window.matchMedia !== "undefined") {
		const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
		storeDarkMode(isDarkMode);
		return isDarkMode;
	}

	storeDarkMode(false);
	return false;
}

function updateBodyDarkMode(): void {
	if (darkMode) {
		window.document.body.classList.add("dark");
	} else {
		window.document.body.classList.remove("dark");
	}
}

function storeDarkMode(isDarkMode: boolean): void {
	window.localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
}

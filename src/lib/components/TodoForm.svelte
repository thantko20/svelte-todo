<script lang="ts">
	import { todosStore } from '$lib';
	import Button from './Button.svelte';

	const { addTodo } = todosStore;

	let value: string = '';
</script>

<form
	on:submit={(e) => {
		e.preventDefault();
		addTodo({ text: value, completed: false });
		value = '';
	}}
	class="flex gap-4 items-center"
>
	<input
		bind:value
		class="w-full text-gray-300 rounded
     bg-gray-700 caret-white outline-none focus:outline focus:outline-blue-500 focus:outline-offset-2
      px-1 py-2 min-w-[300px]"
	/>
	<Button type="submit">Add</Button>
</form>

<script lang="ts">
	import type { ITodo } from '$lib';
	import { todosStore } from '$lib';
	import Button from './Button.svelte';
	const { deleteTodo, toggleTodo } = todosStore;

	export let todo: ITodo;
</script>

<div class="flex items-center justify-between bg-gray-800 p-4 rounded-sm">
	<span>{todo.text}</span>
	<div class="flex gap-2">
		<Button
			on:click={() => toggleTodo(todo.text)}
			className={`${todo.completed ? 'bg-green-500' : 'bg-orange-500'}`}
		>
			{todo.completed ? 'Completed' : 'Incomplete'}
		</Button>
		<Button on:click={() => deleteTodo(todo.text)} className="bg-red-500">Delete</Button>
	</div>
</div>

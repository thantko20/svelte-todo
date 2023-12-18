<script lang="ts">
	import Button from './Button.svelte';
	import type { Todo } from './types';

	export let todo: Todo;
	export let toggleTodo: (text: string) => void;
	export let deleteTodo: (text: string) => void;
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

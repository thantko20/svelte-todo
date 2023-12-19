<script lang="ts">
	import { todosStore } from '$lib';
	import Todo from '$lib/components/Todo.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
</script>

<div class="flex flex-col gap-4 py-8">
	<TodoForm />
	{#each $todosStore as todo (todo.text)}
		<Todo {todo} />
	{/each}
</div>

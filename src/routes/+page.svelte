<script lang="ts">
	import Todo from '$lib/components/Todo.svelte';
	import TodoForm from '$lib/components/TodoForm.svelte';
	import { setTodosContext } from '$lib/contexts/todos.context';

	const todos = setTodosContext();
</script>

<div class="flex flex-col gap-4 py-8">
	<TodoForm />
	{#each $todos as todo (todo.text)}
		<Todo {todo} />
	{/each}
</div>

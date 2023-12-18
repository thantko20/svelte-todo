<script lang="ts">
	import type { Todo as TTodo } from './types';
	import Todo from './Todo.svelte';
	import TodoForm from './TodoForm.svelte';

	let todos: TTodo[] = [
		{
			text: 'Wash the dishes',
			completed: false
		},
		{
			text: 'Learn Svelte',
			completed: false
		},
		{
			text: 'Fix bugs in Pos',
			completed: true
		}
	];

	function addTodo(newTodo: TTodo) {
		const existingTodo = todos.find((todo) => todo.text === newTodo.text);
		if (existingTodo) return;
		todos.push(newTodo);
		todos = todos;
	}

	function toggleTodo(text: string) {
		const idx = todos.findIndex((todo) => todo.text === text);
		if (idx < 0) return;

		todos[idx].completed = !todos[idx].completed;
	}

	function deleteTodo(text: string) {
		todos = todos.filter((todo) => todo.text !== text);
	}
</script>

<div class="flex flex-col gap-4 py-8">
	<TodoForm {addTodo} />
	{#each todos as todo (todo.text)}
		<Todo {todo} {toggleTodo} {deleteTodo} />
	{/each}
</div>

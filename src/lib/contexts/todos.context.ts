import type { ITodo } from '$lib';
import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

export const setTodosContext = () => {
	const store = writable<ITodo[]>([
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
	]);

	setContext('TODOS', store);
	return store;
};

export const getTodosContext = () => {
	const { subscribe, update } = getContext<Writable<ITodo[]>>('TODOS');
	return {
		subscribe,
		addTodo: (newTodo: ITodo) =>
			update((todos) => {
				todos.push(newTodo);
				return todos;
			}),
		deleteTodo: (text: string) => update((todos) => todos.filter((todo) => todo.text !== text)),
		toggleTodo: (text: string) =>
			update((todos) => {
				const idx = todos.findIndex((todo) => todo.text === text);
				if (idx < 0) return todos;
				todos[idx].completed = !todos[idx].completed;
				return todos;
			})
	};
};

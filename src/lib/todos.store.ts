import { writable } from 'svelte/store';
import type { ITodo } from './types';

function createTodosStore() {
	const { subscribe, update } = writable<ITodo[]>([
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
}

export const todosStore = createTodosStore();

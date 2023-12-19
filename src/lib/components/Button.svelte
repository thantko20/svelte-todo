<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let className: string = '';
	export let type: 'submit' | 'button' = 'button';
</script>

<button
	on:click
	{type}
	class={twMerge(`bg-blue-500 px-1 py-2 rounded min-w-[100px] 
  outline-none focus:outline focus:outline-blue-500
    focus:outline-offset-2 focus:ring-offset-transparent ${className}
    `)}
>
	<slot />
</button>

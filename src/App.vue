<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from './stores/TaskStore'
import TasksListFooter from './components/TasksListFooter.vue'
import Nav from './components/Nav.vue'
import CreateTodo from './components/CreateTodo.vue'

const taskStore = useTaskStore()
const route = useRoute()

watch(
	() => route.path,
	async () => {
		// console.log('route fullPath updated', route.path)
		if (route.path === '/active') {
			return taskStore.changeTaskFilter('active')
		} else if (route.path === '/complete') {
			return taskStore.changeTaskFilter('complete')
		}
		return taskStore.changeTaskFilter('all')
	}
)
</script>

<template>
	<Nav />
	<main>
		<CreateTodo />
		<RouterView />
		<TasksListFooter />
	</main>
	<footer><p class="drag">Drag and drop to reorder list</p></footer>
</template>

<style>
.drag {
	text-align: center;
	font-size: 0.76rem;
	color: var(--drag-and-drop);
	padding: 3em 0;
}

@media (width >= 64rem) {
	.drag {
		font-size: 0.7rem;
	}
}
</style>

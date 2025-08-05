<script setup>
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()

const handleClick = filter => {
	taskStore.filter = filter
}
</script>

<template>
	<nav class="filter-links">
		<RouterLink @click="handleClick('all')" :to="{ name: 'Home' }">All</RouterLink>
		<RouterLink @click="handleClick('active')" :to="{ name: 'Active' }">Active</RouterLink>
		<RouterLink @click="handleClick('complete')" :to="{ name: 'Complete' }">Completed</RouterLink>
	</nav>
</template>

<style>
.filter-links {
	justify-content: center;
	gap: 1.2em;
	padding: 0.9rem 1.1rem;
	margin-top: 1em;
	border-radius: 6px;
	font-size: 0.77rem;
	font-weight: bold;
	-webkit-box-shadow: var(--box-shadow-list);
	-moz-box-shadow: var(--box-shadow-list);
	box-shadow: var(--box-shadow-list);
}

.filter-links a {
	color: var(--footer-links);
	text-decoration: none;
}

.filter-links a.router-link-active {
	color: var(--blue-500);
}

@media (width >= 64rem) {
	.filter-links {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
		box-shadow: none;
	}

	.filter-links a:hover {
		color: var(--footer-link-hover);
	}
}
</style>

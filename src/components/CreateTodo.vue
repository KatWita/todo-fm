<script setup>
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'
import Toast from './Toast.vue'

const taskStore = useTaskStore()

const showToast = ref(false)
const task = ref('')

const handleSubmit = () => {
	const newTask = { id: Math.floor(Math.random() * 100000), title: task.value, isComplete: false }

	if (!task.value) {
		showToast.value = true
		setTimeout(() => (showToast.value = false), 3000)
		return
	}

	taskStore.addTask(newTask)
	task.value = ''
}
</script>

<template>
	<Transition name="toast">
		<Toast v-if="showToast" />
	</Transition>
	<form class="form" @submit.prevent="handleSubmit">
		<div class="form__circle"></div>
		<input class="form__input" type="text" placeholder="Create a new todo..." v-model="task" />
	</form>
</template>

<style>
.form {
	display: flex;
	align-items: center;
	gap: 0.8rem;
	padding: 0.8rem 1.1rem;
	margin: 1.87em 0 0.85em;
	background-color: var(--input-bg);
	border-radius: 6px;
}

.form__circle {
	min-width: 20px;
	height: 20px;
	border: 1px solid var(--check-circle);
	border-radius: 50%;
}

.form__input {
	margin-top: 0.2em;
	background: none;
	border: none;
	color: var(--task-text);
	font-size: 0.7rem;
	font-weight: 400;
	caret-color: var(--blue-500);
	outline: transparent;
	width: 100%;
}

.toast-enter-from {
	opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast-leave-to {
	opacity: 0;
}

.form__input::placeholder {
	color: var(--input-placeholder);
}
@media (width >= 64rem) {
	.form {
		gap: 1.333rem;
		padding: 1.1115rem 1.333rem;
		margin: 2em 0 1em;
	}

	.form__circle {
		min-width: 24px;
		height: 24px;
	}

	.form__input {
		font-size: 1rem;
	}
}

@media (width >= 80rem) {
	.form {
		margin: 2.3em 0 1.333em;
	}
}
</style>

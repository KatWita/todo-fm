<script setup>
import { useRoute } from 'vue-router'
import { useTaskStore } from '@/stores/TaskStore'
import Modal from './Modal.vue'
import { useConfirmDialog } from '@vueuse/core'
import FilterNav from './FilterNav.vue'

const taskStore = useTaskStore()

const route = useRoute()

const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog()

onConfirm(() => taskStore.clearCompleteTasks())
</script>

<template>
	<div class="footer">
		<div class="footer__content">
			<p v-if="route.path === '/'">{{ taskStore.tasks.length }} items left</p>
			<p v-if="route.path === '/active'">{{ taskStore.active.length }} items left</p>
			<p v-if="route.path === '/complete'">{{ taskStore.complete.length }} items left</p>
			<button
				class="footer__clear-btn"
				v-if="
					(route.path === '/' && taskStore.complete.length) || (route.path === '/complete' && taskStore.complete.length)
				"
				@click="reveal"
			>
				Clear Completed
			</button>
		</div>
		<FilterNav />
	</div>
	<Modal :isRevealed="isRevealed" :cancel="cancel" :confirm="confirm" action="clear all" what="completed tasks" />
</template>

<style>
.footer__content {
	justify-content: space-between;
	padding: 1rem 1.1rem;
	border-radius: 0 0 6px 6px;
	color: var(--footer-list);
	-webkit-box-shadow: var(--box-shadow);
	-moz-box-shadow: var(--box-shadow);
	box-shadow: var(--box-shadow);
}

.footer__clear-btn {
	color: var(--footer-list);
}

@media (width >= 64rem) {
	.footer {
		position: relative;
	}

	.footer__clear-btn:hover {
		color: var(--task-text);
	}
}
</style>

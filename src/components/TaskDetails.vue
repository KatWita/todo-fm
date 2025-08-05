<script setup>
import { useConfirmDialog } from '@vueuse/core'
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'
import Modal from './Modal.vue'
import CheckButton from './CheckButton.vue'

const props = defineProps(['task'])
const isComplete = ref(props.task.isComplete)

const taskStore = useTaskStore()

const handleClick = id => {
	isComplete.value = !isComplete.value
	setTimeout(() => {
		taskStore.toggleComplete(id)
	}, 250)
}

const { isRevealed, reveal, confirm, cancel, onReveal, onConfirm, onCancel } = useConfirmDialog()

onConfirm(() => taskStore.deleteTask(props.task.id))
</script>

<template>
	<li class="task">
		<CheckButton @taskClicked="handleClick(task.id)" :isComplete="isComplete" />

		<!-- task title -->
		<div class="task-title">
			<p @click="handleClick(task.id)" :class="{ complete: task.isComplete }">{{ task.title }}</p>

			<!-- delete btn -->
			<button @click="reveal" class="task__delete-btn">
				<img src="../assets/images/icon-cross.svg" alt="delete icon" />
			</button>
		</div>

		<!-- Modal -->
		<Modal :isRevealed="isRevealed" :cancel="cancel" :confirm="confirm" action="delete this" what="task" />
	</li>
</template>

<style>
.task,
.task-title {
	display: flex;
	align-items: center;
}

.task {
	gap: 12px;
	padding: 0 1.1rem;
	border-bottom: 1px solid var(--li-item-border-b);
	color: var(--task-text);
}

.task-title {
	justify-content: space-between;
	width: 100%;
}

.task-title p {
	width: 85%;
}

.task-title p,
.task--empty {
	padding: 1.2rem 0;
}

.task-title p.complete {
	color: var(--task-text-complete);
	text-decoration: line-through;
}

.task__delete-btn img {
	width: 12px;
	height: 12px;
}

@media (width >= 64rem) {
	.task {
		gap: 1.333rem;
		padding: 0 1.333rem;
	}

	.task__check-btn:hover .task__check-btn--gradient {
		opacity: 1;
	}

	.task-title {
		position: relative;
	}

	.task-title p,
	.task--empty {
		padding: 1.25rem 0;
	}

	.task-title p {
		cursor: pointer;
		width: 100%;
	}

	.task__delete-btn {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s;
	}

	.task__delete-btn img {
		width: 18px;
		height: 18px;
	}

	.task-title:hover .task__delete-btn {
		opacity: 1;
		visibility: visible;
	}
}
</style>

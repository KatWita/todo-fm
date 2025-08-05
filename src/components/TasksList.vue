<script setup>
import TaskDetails from '@/components/TaskDetails.vue'
import { useTaskStore } from '@/stores/TaskStore'
import { storeToRefs } from 'pinia'
import { VueDraggable } from 'vue-draggable-plus'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)
</script>

<template>
	<VueDraggable class="tasks" v-model="tasks" :scroll="true" target=".sort-target">
		<TransitionGroup type="transition" tag="ul" name="tasks" class="sort-target" appear>
			<TaskDetails
				v-for="task in tasks"
				:key="task.id"
				v-show="
					taskStore.filter == 'all' ||
					(taskStore.filter == 'active' && !task.isComplete) ||
					(taskStore.filter == 'complete' && task.isComplete)
				"
				:task="task"
			/>
		</TransitionGroup>
	</VueDraggable>
</template>

<style>
.tasks {
	border-radius: 6px 6px 0 0;
	overflow: hidden;
}

.tasks-enter-from {
	opacity: 0;
	transform: translateY(30px);
}

.tasks-enter-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
}

.tasks-leave-active {
	transition: opacity 0.16s ease, transform 0.3s ease;
}

.tasks-leave-active {
	position: absolute;
}

.tasks-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.tasks-move {
	transition: all 0.3s ease;
}
</style>

<script setup>
import TasksList from '@/components/TasksList.vue'
import { useTaskStore } from '@/stores/TaskStore'

const taskStore = useTaskStore()
</script>

<template>
	<Transition name="tasks" mode="out-in" appear>
		<p class="task task--empty" v-if="!taskStore.complete.length">There are no completed tasks.</p>
		<TasksList v-else />
	</Transition>
</template>

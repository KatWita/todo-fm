import { defineStore } from 'pinia'

const STORE_NAME = 'tasksStore'

const initialTasks = [
	{ id: 1, title: 'Eat some pierogi', isComplete: true },
	{ id: 2, title: 'Go fishing and catch some Bream', isComplete: false },
]

const getTasks = () => {
	const tasks = localStorage.getItem(STORE_NAME)

	return tasks ? JSON.parse(tasks) : initialTasks
}

const setLocalStorage = tasks => {
	localStorage.setItem(STORE_NAME, JSON.stringify(tasks))
}

export const useTaskStore = defineStore(STORE_NAME, {
	state: () => ({
		tasks: getTasks(),
		filter: 'all',
	}),
	getters: {
		complete(state) {
			return state.tasks.filter(task => task.isComplete)
		},
		active(state) {
			return state.tasks.filter(task => !task.isComplete)
		},
	},
	actions: {
		addTask(task) {
			this.tasks.unshift(task)

			setLocalStorage(this.tasks)
		},
		deleteTask(id) {
			this.tasks = this.tasks.filter(task => task.id !== id)
			setLocalStorage(this.tasks)
		},
		toggleComplete(id) {
			const task = this.tasks.find(task => task.id === id)
			task.isComplete = !task.isComplete
		},
		changeTaskFilter(filter) {
			this.filter = filter
		},
		clearCompleteTasks() {
			this.tasks = this.tasks.filter(task => !task.isComplete)
			setLocalStorage(this.tasks)
		},
	},
})

<script setup>
const emit = defineEmits(['taskClicked'])
defineProps(['isComplete'])
</script>

<template>
	<button @click="emit('taskClicked')" class="task__check-btn" :class="{ checked: isComplete }">
		<svg
			class="task__check-btn--gray"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="10" cy="10" r="9.5" stroke="#393A4C" />
		</svg>
		<img class="task__check-btn--gradient" src="../assets/images/check-circle.svg" />
	</button>
</template>

<style>
.task__check-btn {
	position: relative;
}

.task__check-btn::before,
.task__check-btn::after {
	position: absolute;
	transition: transform 0.3s, opacity 0.3s;
	opacity: 0;
}

.task__check-btn::before {
	content: '';
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-image: var(--check-bg);
}

.task__check-btn::after {
	content: url(../assets/images/icon-check.svg);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0.9);
}

.task__check-btn.checked::before,
.task__check-btn.checked::after {
	opacity: 1;
}

.task__check-btn--gradient {
	position: absolute;
	top: 0;
	left: 0;
}

.task__check-btn--gray circle {
	stroke: var(--check-circle);
}

.task__check-btn .task__check-btn--gradient {
	opacity: 0;
	transition: opacity 0.3s;
}

@media (width >= 64rem) {
	.task__check-btn svg,
	.task__check-btn--gradient,
	.task__check-btn::before {
		width: 24px;
		height: 24px;
	}

	.task__check-btn::after {
		transform: translate(-50%, -50%) scale(1);
	}
}
</style>

<template>
	<teleport to=".modal">
		<Transition name="dialog">
			<div v-if="isRevealed">
				<div class="modal__bg" @click="cancel"></div>
				<div class="modal__content">
					<p>
						Do you want to <span class="modal__action-text">{{ action }}</span> {{ what }}?
					</p>
					<div class="modal__action-btns">
						<button @click="confirm" class="yes">Yes</button>
						<button @click="cancel" class="no">No</button>
					</div>
				</div>
			</div>
		</Transition>
	</teleport>
</template>

<script setup>
const props = defineProps(['confirm', 'cancel', 'isRevealed', 'action', 'what'])
</script>

<style>
.modal__bg,
.modal__content {
	position: fixed;
}

.modal__bg {
	inset: 0;
	background-color: hsla(0, 0%, 0%, 0.7);
}

.modal__content {
	padding: 1.4rem 2em;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 270px;
	max-width: 300px;
	border-radius: 6px;
	background-color: var(--input-bg);
	color: var(--task-text);
	text-align: center;
}

.modal__content p {
	margin-bottom: 1.5em;
	line-height: 1.5rem;
}

.modal__action-text {
	color: var(--toast-bg);
}

.modal__action-btns {
	display: flex;
	justify-content: center;
	gap: 2.5em;
}

.modal__action-btns button {
	font-size: 0.86rem;
}

.yes,
.no {
	font-weight: bold;
}

.yes {
	border: none;
	color: var(--footer-list);
}

.no {
	color: var(--blue-500);
}

.dialog-enter-from,
.dialog-leave-to {
	opacity: 0;
}
.dialog-enter-active,
.dialog-leave-active {
	transition: opacity 0.3s ease;
}

@media (width >= 64rem) {
	.modal__content {
		top: 30%;
		width: 350px;
		max-width: 350px;
	}

	.modal__action-btns button {
		transition: color 0.3s;
	}

	.modal__action-btns button:hover {
		color: var(--footer-link-hover);
	}
}
</style>

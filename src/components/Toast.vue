<template>
	<div class="toast">
		<p>Please enter a value</p>
	</div>
</template>

<style>
.toast {
	position: fixed;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	width: 300px;
	padding: 1rem;
	color: var(--gray-50);
	background: var(--toast-bg);
	border-radius: 8px;
	box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.568);
	text-align: center;
}

@media (width >= 64rem) {
	.toast {
		width: 400px;
	}
}
</style>

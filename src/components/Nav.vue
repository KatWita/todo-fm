<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
	selector: 'body',
})

const toggleDark = useToggle(isDark)
</script>

<template>
	<header>
		<div class="header__img--mobile">
			<img src="../assets/images/bg-mobile-dark.jpg" class="header__img header__img--dark" />
			<img src="../assets/images/bg-mobile-light.jpg" class="header__img header__img--light" />
		</div>

		<div class="header__img--desktop">
			<img src="../assets/images/bg-desktop-dark.jpg" class="header__img header__img--dark" />
			<img src="../assets/images/bg-desktop-light.jpg" class="header__img header__img--light" />
		</div>
		<nav class="nav">
			<h1 class="nav__logo">TODO</h1>
			<div>
				<button v-if="isDark" @click="toggleDark()">
					<img src="../assets/images/icon-sun.svg" class="nav__mode-icon" alt="mode sun button" />
				</button>
				<button v-if="!isDark" @click="toggleDark()">
					<img src="../assets/images/icon-moon.svg" class="nav__mode-icon" alt="mode moon button" />
				</button>
			</div>
		</nav>
	</header>
</template>

<style>
.header__img {
	position: absolute;
	top: 0;
	left: 0;
	z-index: -10;
	width: 100vw;
	max-height: 200px;
	object-fit: cover;
}

.header__img--desktop,
.header__img--dark,
.dark .header__img--light {
	display: none;
}

.dark .header__img--dark {
	display: block;
}

.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav__logo {
	color: var(--gray-50);
	letter-spacing: 10px;
}

.nav__mode-icon {
	width: 20px;
}

@media (width >= 64rem) {
	.header__img {
		max-height: 300px;
	}

	.header__img--desktop {
		display: block;
	}

	.header__img--mobile {
		display: none;
	}

	.nav__logo {
		font-size: 2.15rem;
		letter-spacing: 16px;
	}

	.nav__mode-icon {
		width: 25px;
	}
}
</style>

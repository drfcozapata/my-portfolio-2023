<script setup>
	import { RouterView } from 'vue-router';
	import Navbar from './components/layout/Navbar.vue';
	import Footer from './components/layout/Footer.vue';
</script>

<template>
	<Navbar />
	<RouterView v-slot="{ Component }">
		<Transition name="page-opacity" mode="out-in">
			<component :is="Component" />
		</Transition>
	</RouterView>
	<Footer />
</template>

<style scoped>
	.page-opacity-enter-active,
	.page-opacity-leave-active {
		transition: 600ms ease all;
	}

	.page-opacity-enter-from,
	.page-opacity-leave-to {
		opacity: 0;
	}
</style>

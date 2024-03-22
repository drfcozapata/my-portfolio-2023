<script setup>
	import Hero from '../components/home/Hero.vue';
	import TechStacks from '../components/home/TechStacks.vue';
	import Projects from '../components/home/Projects.vue';
	import Blog from '../components/home/Blog.vue';
	import InTouch from '../components/home/InTouch.vue';
	import { onMounted } from 'vue';

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// Llamar a scrollToTop cuando el componente se monta
	onMounted(() => {
		scrollToTop();
	});
</script>

<template>
	<main>
		<Hero />
		<TechStacks />
		<Projects id="projects" />
		<!-- <Blog /> -->
		<InTouch />
	</main>
</template>

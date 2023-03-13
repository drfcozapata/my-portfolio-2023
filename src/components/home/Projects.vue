<template>
	<div class="min-h-[110vh] lg:px-[120px] mb-20 projects">
		<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			My Projects
		</h2>
		<h3 class="text-3xl font-semibold ml-5 mb-5">Frontend</h3>
		<p class="lg:px-[120px]">
			Voluptate magnam quae eum dolore, rerum fugiat iure ratione? In hic nobis, labore
			aperiam accusamus veniam reiciendis dolore blanditiis fugit aut, officia, optio
			cupiditate? Ipsa, iure vitae quo qui autem labore quibusdam facilis aperiam facere
			aspernatur delectus consequuntur odio modi temporibus mollitia impedit
			exercitationem molestias blanditiis voluptatem.
		</p>
		<Carousel class="lg:px-[120px] mx-auto" />
	</div>
</template>

<script setup>
	import Carousel from '../layout/Carousel.vue';
</script>

<style lang="scss" scoped>
	.projects {
		background-color: #f1f1f1;
		background-image: url(../../assets/img/bg-stripes.svg);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 70vh;
		padding: 80px 0;
		clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 80px));
	}
</style>

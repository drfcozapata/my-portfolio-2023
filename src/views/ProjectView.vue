<template>
	<section
		v-for="project in projects"
		:key="project.id"
		class="my-20 min-h-[120vh] lg:px-[230px] mb-20"
	>
		<div class="mx-auto">
			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
				{{ project.name }}
			</h2>
			<figure class="w-4/5 h-[450px] mx-auto mb-10 rounded-t-xl shadow-xl scr image">
				<img
					:src="'../' + project.image"
					alt=""
					class="border rounded-t-xl max-h-[450px] w-full object-cover"
				/>
			</figure>
			<p class="text-base md:text-lg mb-2"><strong>Year</strong>: {{ project.year }}</p>
			<p class="text-base md:text-lg mb-2">
				<strong>Language</strong>: {{ project.language }}
			</p>
			<p class="text-base md:text-lg mb-2">
				<strong>Stacks</strong>: {{ project.stacks }}
			</p>
			<p class="text-base md:text-lg mb-2">
				<strong>Published</strong>: {{ project.published }}
			</p>
			<p class="text-base md:text-lg mb-2"><strong>URL</strong>: {{ project.url }}</p>
			<p class="text-base md:text-lg"><strong>Description</strong>:</p>
			<div v-for="(description, index) in project.description" :key="index">
				<p class="text-base md:text-lg">{{ description }}</p>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { projects } from '../data/projects.json';
</script>

<style lang="scss" scoped>
	.image {
		align-items: flex-start !important;
		will-change: transform;
		transition: transform 500ms ease;

		&:hover {
			transform: scale(1.1);
		}
	}
</style>

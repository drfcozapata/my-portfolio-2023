<template>
	<section
		:key="project.id"
		class="my-10 lg:my-20 min-h-[100vh] lg:min-h-[120vh] px-[30px] lg:px-[230px] mb-20"
	>
		<div class="mx-auto">
			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
				{{ project.name }}
			</h2>
			<figure
				class="w-full lg:w-4/5 h-[250px] lg:h-[540px] mx-auto mb-10 rounded-t-xl shadow-xl image"
			>
				<img
					:src="'../' + project.image"
					:alt="`Screenshot of '${project.name}' project`"
					class="border rounded-t-xl max-h-[250px] lg:max-h-[540px] w-full object-cover object-top"
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
				<strong>Published</strong>:
				{{ project.published }}
			</p>
			<p class="text-base md:text-lg mb-2">
				<strong>URL</strong>:
				<a
					:href="project.url"
					target="_blank"
					class="text-slate-900 hover:text-slate-600"
				>
					{{ project.url }}
				</a>
			</p>
			<p class="text-base md:text-lg"><strong>Description</strong>:</p>
			<div v-for="(description, index) in project.description" :key="index">
				<p class="text-base md:text-lg">{{ description }}</p>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { RouterLink, useRoute } from 'vue-router';
	import { projects } from '../data/projects.json';
	import { reactive } from 'vue';

	const route = useRoute();
	const projectId = route.params.id;

	const project = reactive({
		id: projects[projectId - 1].id,
		name: projects[projectId - 1].name,
		image: projects[projectId - 1].image,
		year: projects[projectId - 1].year,
		language: projects[projectId - 1].language,
		stacks: projects[projectId - 1].stacks,
		published: projects[projectId - 1].published,
		url: projects[projectId - 1].url,
		description: projects[projectId - 1].description,
	});
</script>

<style lang="scss" scoped>
	.image {
		will-change: transform;
		transition: transform 500ms ease;

		&:hover {
			transform: scale(1.1);
		}
	}
</style>

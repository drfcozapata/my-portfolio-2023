<script setup>
	import { useRoute } from 'vue-router';
	import { projects } from '../data/projects.json';
	import { reactive } from 'vue';

	const route = useRoute();
	const projectId = route.params.id;

	const project = reactive(projects[projectId - 1]);

	const getImgPath = img => {
		return new URL(`../assets/img/${img}`, import.meta.url).href;
	};

	project.selectedImage = project.images[0];

	const selectImage = index => {
		project.selectedImage = project.images[index];
	};
</script>

<template>
	<section
		:key="project.id"
		class="my-10 lg:my-20 min-h-[100vh] lg:min-h-[120vh] px-[130px] 4xl:px-[230px] mb-20"
	>
		<div class="mx-auto">
			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
				{{ project.name }}
			</h2>
			<figure
				id="big-image"
				class="w-full 4xl:w-4/5 h-[250px] md:h-[540px] mx-auto mb-10 rounded-t-[25px] shadow-xl image overflow-y-auto flex justify-start"
			>
				<div class="h-full w-full overflow-y-auto rounded-t-[25px] image-container">
					<img
						:src="getImgPath(project.selectedImage)"
						:alt="`Screenshot of '${project.name}' project`"
						class="border rounded-t-[25px] h-auto w-full object-cover object-top"
					/>
				</div>
			</figure>

			<div
				v-if="project.images && project.images.length > 1"
				id="small-images"
				class="my-10 h-28 flex gap-5 justify-center"
			>
				<figure
					class="h-28 w-[200px]"
					v-for="(image, index) in project.images"
					:key="index"
					@click="selectImage(index)"
				>
					<img :src="getImgPath(image)" :alt="`Thumbnail of '${project.name}' project`"
					class="border rounded-xl h-28 w-full object-cover object-top cursor-pointer"
				</figure>
			</div>

			<div class="px-[130px] 4xl:px-[230px]">
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
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.image {
		will-change: transform;
		transition: transform 500ms ease;

		&:hover {
			transform: scale(1.02);
		}
	}
	.image-container::-webkit-scrollbar {
		width: 2px;
	}

	.image-container::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
	}
</style>

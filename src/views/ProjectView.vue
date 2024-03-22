<script setup>
	import { computed, reactive, ref } from 'vue';
	import { RouterLink, useRoute } from 'vue-router';
	import { projects } from '../data/projects.json';
	import BackIcon from '@/components/BackIcon.vue';

	const route = useRoute();
	const projectId = route.params.id;

	const { id, name, images, year, language, stacks, description, published, url } =
		reactive(projects[projectId - 1]);

	const getImgPath = img => {
		return new URL(`../assets/img/${img}`, import.meta.url).href;
	};

	const selectedImage = ref(images[0]);

	const selectImage = index => {
		selectedImage.value = images[index];
	};

	const lang = computed(() => {
		if (language.length > 1) {
			return 'Languages';
		} else {
			return 'Language';
		}
	});
</script>

<template>
	<section
		:key="id"
		class="my-10 lg:my-20 min-h-[100vh] lg:min-h-[120vh] px-[15px] md:px-[70px] 2xl:px-[120px] 4xl:px-[230px] mb-20"
	>
		<div class="mx-auto">
			<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
				{{ name }}
			</h2>

			<RouterLink to="/" id="back">
				<button class="flex gap-1 mb-2 items-center text-gray-500 4xl:ml-[160px]">
					<BackIcon class="w-6 h-6" />
					<p class="font-semibold">{{ $t('Back') }}</p>
				</button>
			</RouterLink>
			<figure
				id="big-image"
				class="w-full 4xl:w-4/5 h-[180px] md:h-[280px] lg:h-[370px] xl:h-[440px] 3xl:h-[540px] mx-auto mb-10 rounded-t-xl lg:rounded-t-[25px] shadow-xl image overflow-y-auto flex justify-start"
			>
				<div
					class="h-full w-full overflow-y-auto rounded-t-xl lg:rounded-t-[25px] image-container"
				>
					<img
						:src="getImgPath(selectedImage)"
						:alt="`Screenshot of '${name}' project`"
						class="border rounded-t-xl lg:rounded-t-[25px] h-auto w-full object-cover object-top"
					/>
				</div>
			</figure>

			<div
				v-if="images && images.length > 1"
				id="small-images"
				class="my-10 min-h-60 lg:min-h-28 w-full flex flex-wrap gap-3 lg:gap-5 justify-center"
			>
				<figure
					class="lg:h-28 xl:h-[150px] w-[170px] md:w-[150px] lg:w-[200px] xl:w-[260px]"
					v-for="(image, index) in images"
					:key="index"
					@click="selectImage(index)"
				>
					<img :src="getImgPath(image)" :alt="`Thumbnail of '${name}' project`"
					class="border rounded-xl h-28 xl:h-[150px] w-full object-cover object-top
					cursor-pointer"
				</figure>
			</div>

			<div class="px-[15px] lg:px-[130px] 4xl:px-[230px]">
				<p class="text-base md:text-lg mb-2">
					<strong>{{ $t('Year') }}</strong
					>: {{ year }}
				</p>
				<p class="text-base md:text-lg mb-2">
					<strong>{{ $t(lang) }}</strong
					>:
					<template v-for="(langItem, index) in language">
						<span>{{ $t(langItem) }}</span>
						<span v-if="index < language.length - 1">, </span>
					</template>
				</p>
				<p class="text-base md:text-lg mb-2">
					<strong>{{ $t('Stacks') }}</strong
					>: {{ stacks }}
				</p>
				<p class="text-base md:text-lg mb-2">
					<strong>{{ $t('Published') }}</strong
					>:
					{{ $t(published) }}
				</p>
				<p class="text-base md:text-lg mb-2">
					<strong>URL</strong>:
					<a :href="url" target="_blank" class="text-slate-900 hover:text-slate-600">
						{{ url }}
					</a>
				</p>
				<p class="text-base md:text-lg">
					<strong>{{ $t('Description') }}</strong
					>:
				</p>
				<div v-for="(descript, index) in description" :key="index">
					<p class="text-base md:text-lg mb-2">{{ $t(descript) }}</p>
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

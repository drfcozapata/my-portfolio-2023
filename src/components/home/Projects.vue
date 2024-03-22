<script setup>
	import { onBeforeRouteLeave } from 'vue-router';
	import { projects } from '../../data/projects.json';
	import { ref } from 'vue';

	const getImgPath = img => {
		return new URL(`../../assets/img/${img}`, import.meta.url).href;
	};

	const scrollPosition = ref(0);

	onBeforeRouteLeave((to, from) => {
		if (from.name === 'home' && to.name === 'project') {
			scrollPosition.value = window.scrollY;
		}
	});
</script>

<template>
	<section class="min-h-[120vh] py-24 lg:px-16 mb-20 projects">
		<!-- Intro -->
		<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			{{ $t('Projects') }}
		</h2>
		<div class="w-full 4xl:w-4/5 mx-auto px-6 md:px-10 2xl:px-24 3xl:px-28">
			<p class="text-base md:text-lg 4xl:text-xl mb-5">
				{{ $t('ProjectParagraph1') }}
			</p>
			<p class="text-base md:text-lg 4xl:text-xl mb-5">
				{{ $t('ProjectParagraph2') }}
			</p>
			<p class="text-base md:text-lg 4xl:text-xl mb-5">
				{{ $t('ProjectParagraph3') }}
			</p>
			<p class="text-base md:text-lg 4xl:text-xl mb-10">
				{{ $t('ProjectParagraph4') }}
			</p>
		</div>

		<!-- Projects -->
		<article
			class="md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 lg:grid-rows-3 gap-5 2xl:gap-7 4xl:gap-10 w-full 4xl:w-4/5 mx-auto px-6 md:px-10 2xl:px-24 3xl:px-28 mb-10"
		>
			<RouterLink
				v-for="{ id, name, images, description } in projects"
				:key="id"
				:to="`/project/${id}`"
			>
				<div
					class="card card-compact w-full min-h-[230px] md:min-h-[282px] lg:min-h-[310px] xl:min-h-[302px] 2xl:min-h-[310px] 3xl:min-h-[335px] 4xl:min-h-[360px] bg-base-100 shadow-xl mb-5 md:mb-0"
				>
					<figure
						class="h-32 md:h-[150px] lg:h-[150px] xl:h-[170px] 2xl:h-[180px] 3xl:h-[200px] image"
					>
						<img :src="getImgPath(images[0])" :alt="name" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">{{ name }}</h2>
						<p class="4xl:text-lg">
							{{ $t(description[0]) }}
						</p>
					</div>
				</div>
			</RouterLink>
		</article>
	</section>
</template>

<style lang="scss" scoped>
	.projects {
		background-color: #f1f1f1;
		background-image: url(../../assets/img/bg-stripes.svg);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 90%;
		clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 80px));

		.card {
			will-change: transform;
			transition: transform 500ms ease;

			&:hover {
				transform: scale(1.04) rotate(-2deg);
			}

			.image {
				align-items: flex-start !important;
			}
		}
	}
</style>

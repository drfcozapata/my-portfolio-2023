<template>
	<section class="min-h-[120vh] lg:px-[120px] mb-20 projects">
		<!-- Intro -->
		<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			My Projects
		</h2>
		<div class="lg:w-3/4 mx-auto px-10 md:px-20 lg:px-0">
			<p class="text-base md:text-lg mb-5">
				During the last 3 years I have developed several projects: landing pages,
				e-commerces, frontend of complete websites and fullstack sites (frontend and
				backend) using different technologies.
			</p>
			<p class="text-base md:text-lg mb-5">
				Not all my creations are available to be shown because many times I am
				subcontracted by agencies and my role goes up to the development of the code,
				being them who deploy the sites, and I don't know the url's of them.
			</p>
			<p class="text-base md:text-lg mb-5">
				I show here only some personal projects created during my training and the few
				that I have managed to deploy completely by myself.
			</p>
			<p class="text-base md:text-lg mb-10">
				Personal fullstack projects developed during 2021-2022 suffered the loss of their
				backend with the change of Heroku's policy, where they were hosted for free. That
				is why they are not included.
			</p>
		</div>

		<!-- Projects -->
		<article
			class="md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 lg:grid-rows-3 md:gap-10 lg:w-3/4 mx-auto px-10 md:px-20 lg:px-0 mb-10"
		>
			<RouterLink
				v-for="{ id, name, image, description } in projects"
				:key="id"
				:to="`/project/${id}`"
			>
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img :src="image" alt="" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">{{ name }}</h2>
						<p>
							{{ description[0] }}
						</p>
					</div>
				</div>
			</RouterLink>
		</article>
	</section>
</template>

<script setup>
	import { projects } from '../../data/projects.json';
</script>

<style lang="scss" scoped>
	.projects {
		background-color: #f1f1f1;
		background-image: url(../../assets/img/bg-stripes.svg);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 90%;
		padding: 80px 0;
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

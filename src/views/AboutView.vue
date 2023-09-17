<template>
	<div class="about mx-auto lg:px-[220px] my-20 bg-base-100 min-h-[calc(100vh-308px)]">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			About me
		</h1>
		<div class="lg:flex lg:gap-[50px]">
			<div class="lg:w-1/3">
				<img
					src="../assets/img/about.jpg"
					alt="About me photo"
					class="w-2/3 md:w-1/2 lg:w-full mx-auto rounded-xl"
				/>
			</div>
			<section class="lg:w-2/3 px-7 md:px-20 lg:px-0 mt-[50px] lg:mt-0">
				<p class="text-base md:text-lg mb-5">
					I am a <strong>Fullstack Web Developer</strong> since November 2019. From 2021 I
					concentrated my work around
					<strong><a href="https://vuejs.org/" target="_blank">Vue.js</a></strong> and all
					its ecosystem, incorporating from the end of 2022
					<strong><a href="https://laravel.com/" target="_blank">Laravel</a></strong> and
					<strong><a href="http://inertiajs.com/" target="_blank">Inertia</a></strong
					>. I share this role with being husband of my beautiful Ana Karyna and being
					father of my 3 precious children: Miguel, Francis and Rut.
				</p>
				<p class="text-base md:text-lg mb-5">
					My career as a developer I have deployed since my beginnings as a freelancer,
					mainly through the
					<strong><a href="https://www.workana.com/" target="_blank">Workana</a></strong>
					platform, where I started in 2018 playing roles as a copywriter and editorial
					designer.
				</p>
				<p class="text-base md:text-lg mb-5">
					My training has been essentially self-taught (through Udemy courses and YouTube
					courses/tutorials). I decided to formalize my education in the area of web
					development and studied at
					<strong><a href="https://academlo.com/" target="_blank">Academlo</a></strong
					>, where I graduated as a Fullstack Web Developer.
				</p>
				<p class="text-base md:text-lg mb-5">
					Individually, I have developed multiple projects as a freelancer (most of them
					at frontend level and some others at fullstack level) some of which I have left
					as a sample on this site, and I have worked for periods of 3 months
					collaborating with the teams of some companies (including UPH&Blue Group,
					Tracking Premium LLC, Blocklack SL, Soft 506 and SiGO Soluciones, SL).
				</p>
				<p class="text-base md:text-lg mb-5">
					With me you can be sure that your project will be in the right hands,
					guaranteeing responsibility and efficiency in its development.
				</p>

				<div class="flex justify-center mt-12">
					<RouterLink to="/contact">
						<button
							class="btn btn-primary h-16 px-10 rounded-full text-xl hover:bg-yellow-400 hover:border-transparent"
						>
							Contact Me
						</button>
					</RouterLink>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
	import { RouterLink } from 'vue-router';
</script>

<style scoped></style>

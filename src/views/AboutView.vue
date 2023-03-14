<template>
	<div class="about mx-auto lg:px-[220px] my-20 bg-base-100">
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
			<section class="lg:w-2/3 px-10 md:px-20 lg:px-0 mt-[50px] lg:mt-0">
				<p class="text-base md:text-lg mb-5">
					I'm a <strong>Fullstack Web Developer</strong>, specialized in
					<strong>Vue.js</strong> and all its ecosystem since November 2019. I share this
					role with being husband of my beautiful Ana Karyna and father of 3 precious
					beings: Miguel, Francis and Rut.
				</p>
				<p class="text-base md:text-lg mb-5">
					My career as a developer I have deployed since the beginning as a freelancer,
					mainly through the <strong>Workana</strong> platform, where I started in 2018
					performing roles as a copywriter and editorial designer.
				</p>
				<p class="text-base md:text-lg mb-5">
					My training has been essentially self-taught (through Udemy courses and YouTube
					courses/tutorials). I decided to make my training more formal in the area of web
					development and I studied at <strong>Academlo</strong>, from where I graduated
					as a Fullstack Web Developer.
				</p>
				<p class="text-base md:text-lg mb-5">
					Individually, I have developed multiple projects as a freelancer (mostly at the
					frontend level and some others at the fullstack level.) some of which I have
					left as a sample on this site, and I have worked for periods of 1 to 3 months
					collaborating with the teams of some companies (including UPH&Bue Group,
					Tracking Premium LLC and Blocklack).
				</p>
				<p class="text-base md:text-lg mb-5">
					With me, you can be sure that your project will be in the right hands,
					guaranteeing responsibility and effectiveness in its development.
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

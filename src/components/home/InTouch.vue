<template>
	<section
		class="min-h-[50vh] in-touch bg-base-200 flex justify-between items-center section-in-touch"
	>
		<div class="lg:pl-[120px]">
			<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
				Let's Work Together!
			</h2>
			<p
				class="py-2 w-full md:mx-auto lg:mx-0 text-lg md:text-xl lg:text-2xl leading-loose text-slate-200 mb-7"
			>
				Have a project you'd like to discuss?
			</p>
			<RouterLink to="/contact">
				<button
					class="btn btn-primary h-14 px-8 rounded-full text-xl hover:bg-yellow-400"
				>
					Contact Me
				</button>
			</RouterLink>
		</div>

		<aside class="lg:pr-[120px] flex flex-col gap-6">
			<a href="mailto:drfcozapata@gmail.com" target="_blank">
				<figure class="w-[30px] h-[30px]">
					<img src="../../assets/img/email.svg" alt="Icono de Email" />
				</figure>
			</a>
			<a href="https://www.linkedin.com/in/drfcozapata/" target="_blank">
				<figure class="w-[30px] h-[30px]">
					<img src="../../assets/img/linkedin.svg" alt="Icono de LinkedIn" />
				</figure>
			</a>
			<a href="https://twitter.com/drfcozapata" target="_blank">
				<figure class="w-[30px] h-[30px]">
					<img src="../../assets/img/twitter.svg" alt="Icono de Twitter" />
				</figure>
			</a>
		</aside>
	</section>
</template>

<script setup>
	import { RouterLink } from 'vue-router';
</script>

<style label="scss" scoped>
	.section-in-touch {
		background-color: #0f172a;
		padding: 80px 0 0 0;
		clip-path: polygon(0 0, 100% 80px, 100% 100%, 0 100%);
	}
</style>

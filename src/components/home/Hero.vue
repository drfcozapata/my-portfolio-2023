import { RouterLink } from 'vue-router';

<template>
	<div class="hero min-h-screen bg-base-200 section-hero">
		<div class="hero-content flex-col lg:flex-row-reverse lg:px-[120px]">
			<div class="bg-orange-100 rounded-lg max-w-[60%] md:max-w-[280px] lg:max-w-sm">
				<img
					src="../../assets/img/meVertical.png"
					alt="Francisco Zapata"
					class="rounded-lg shadow-2xl shadow-blue-600 lg:max-w-xs"
				/>
			</div>
			<div class="text-center lg:text-left">
				<h1
					class="mt-10 lg:mt-0 text-[40px] md:text-5xl lg:text-6xl font-bold text-white"
				>
					Hi! I'm Francisco
				</h1>
				<p
					class="py-6 w-full md:w-[90%] md:mx-auto lg:w-[80%] lg:mx-0 text-lg md:text-xl lg:text-2xl leading-loose text-slate-200 mb-10"
				>
					I'm a Vue.js fullstack web developer from Puerto Ordaz, Venezuela. I like to
					work hand to hand with my clients, whose I prefer to call my friends. <br />
					Let's work together!
				</p>
				<RouterLink to="/contact">
					<button
						class="btn btn-primary h-16 px-10 rounded-full text-xl hover:bg-yellow-400"
					>
						Contact Me
					</button>
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style>
	.section-hero {
		background-color: #0f172a;
		padding: 0 0 80px 0;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 80px));
	}
</style>

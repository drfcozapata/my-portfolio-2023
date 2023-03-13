<template>
	<div class="navbar sticky top-0 bg-base-200 h-20 z-50 shadow-md shadow-slate-900">
		<div class="flex-none">
			<button class="btn btn-square btn-ghost text-slate-200">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-7 h-7 stroke-current"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
		</div>
		<div class="flex-1">
			<RouterLink to="/">
				<img
					src="../../assets/img/Logo-02.svg"
					alt="Logo Francisco Zapata"
					class="h-[50px] md:h-[60px] w-auto ml-8"
				/>
			</RouterLink>
		</div>
		<div class="hidden lg:flex">
			<ul class="menu menu-horizontal px-1 text-slate-200 text-lg">
				<li>
					<RouterLink to="/about"> About me </RouterLink>
				</li>
				<li>
					<RouterLink to="/blog"> Blog </RouterLink>
				</li>
				<li>
					<RouterLink to="/contact"> Contact me </RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { RouterLink } from 'vue-router';
</script>

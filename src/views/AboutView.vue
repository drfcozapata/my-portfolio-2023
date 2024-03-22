<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="about mx-auto lg:px-[220px] my-20 bg-base-100 min-h-[calc(100vh-308px)]">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			{{ $t('About') }}
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
					{{ $t('About1') }}
				</p>
				<p class="text-base md:text-lg mb-5">
					{{ $t('About2') }}
				</p>
				<p class="text-base md:text-lg mb-5">
					{{ $t('About3') }}
				</p>
				<p class="text-base md:text-lg mb-5">
					{{ $t('About4') }}
				</p>
				<p class="text-base md:text-lg mb-5">
					{{ $t('About5') }}
				</p>

				<div class="flex justify-center mt-12">
					<RouterLink to="/contact">
						<button
							class="btn btn-primary h-16 px-10 rounded-full text-xl hover:bg-yellow-400 hover:border-transparent"
						>
							{{ $t('Contact') }}
						</button>
					</RouterLink>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped></style>

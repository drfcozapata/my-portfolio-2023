<script setup>
	import { RouterLink } from 'vue-router';
	import Resalt from '@/components/layout/Resalt.vue';
</script>

<template>
	<footer
		class="footer flex flex-col md:flex-row justify-around items-center p-4 bg-neutral text-neutral-content"
	>
		<div class="items-center flex gap-2">
			<Resalt />

			<p>All right reserved. &copy; {{ new Date().getFullYear() }} by Duolos Dev</p>
		</div>
		<div class="flex gap-7 -mt-7 md:mt-0">
			<RouterLink to="/terms-conditions">
				<p>Terms and Conditions</p>
			</RouterLink>
			<RouterLink to="/privacy-policy">
				<p>Privacy Policy</p>
			</RouterLink>
		</div>
	</footer>
</template>

<style scoped></style>

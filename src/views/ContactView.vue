<script setup>
	import ContactForm from '../components/layout/ContactForm.vue';
	import { reactive, ref } from 'vue';

	const firstName = ref('');
	const lastName = ref('');
	const email = ref('');
	const phone = ref('');
	const company = ref('');
	const message = ref('');

	let contactFormData = reactive({
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		phone: phone.value,
		company: company.value,
		message: message.value,
	});

	const submitForm = () => {
		console.log(contactFormData.value);
		firstName.value = '';
		lastName.value = '';
		email.value = '';
		phone.value = '';
		company.value = '';
		message.value = '';
	};
</script>

<template>
	<div class="about mx-auto lg:px-[220px] my-20 bg-base-100 min-h-[calc(100vh-308px)]">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			Contact me
		</h1>
		<div class="lg:flex lg:gap-[50px]">
			<div class="h-[376px] 2xl:h-[416px]">
				<img
					src="../assets/img/contact.png"
					alt="Contact image"
					class="h-full w-2/3 md:w-1/2 lg:w-full mx-auto rounded-xl lg:rounded-r-none bg-cover"
				/>
			</div>
			<section class="lg:w-2/3 px-5 md:px-10 lg:px-0 mt-[50px] lg:mt-0">
				<ContactForm
					v-model:firstName="firstName"
					v-model:lastName="lastName"
					v-model:email="email"
					v-model:phone="phone"
					v-model:company="company"
					v-model:message="message"
					submitForm="submitForm"
				/>
			</section>
		</div>
	</div>
</template>

<style scoped></style>

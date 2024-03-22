<template>
	<div class="isolate px-6 lg:px-8">
		<!-- <form @submit.prevent="submitForm"> -->
		<form>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_first_name"
						id="floating_first_name"
						class="block py-2.5 px-0 w-full text-sm 2xl:text-lg text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						:value="firstName"
					/>
					<label
						for="floating_first_name"
						class="peer-focus:font-medium absolute text-sm 2xl:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>{{ $t('Contact1') }}</label
					>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_last_name"
						id="floating_last_name"
						class="block py-2.5 px-0 w-full text-sm 2xl:text-lg text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						:value="lastName"
					/>
					<label
						for="floating_last_name"
						class="peer-focus:font-medium absolute text-sm 2xl:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>{{ $t('Contact2') }}</label
					>
				</div>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<input
					type="email"
					name="floating_email"
					id="floating_email"
					class="block py-2.5 px-0 w-full text-sm 2xl:text-lg text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
					:value="email"
				/>
				<label
					for="floating_email"
					class="peer-focus:font-medium absolute text-sm 2xl:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>{{ $t('Contact3') }}</label
				>
			</div>
			<div class="grid md:grid-cols-2 md:gap-6">
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="tel"
						name="floating_phone"
						id="floating_phone"
						class="block py-2.5 px-0 w-full text-sm 2xl:text-lg text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						:value="phone"
					/>
					<label
						for="floating_phone"
						class="peer-focus:font-medium absolute text-sm 2xl:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>{{ $t('Contact4') }}</label
					>
				</div>
				<div class="relative z-0 w-full mb-6 group">
					<input
						type="text"
						name="floating_company"
						id="floating_company"
						class="block py-2.5 px-0 w-full text-sm 2xl:text-lg text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
						:value="company"
					/>
					<label
						for="floating_company"
						class="peer-focus:font-medium absolute text-sm 2xl:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
						>{{ $t('Contact5') }}</label
					>
				</div>
			</div>
			<div class="relative z-0 w-full mb-6 group">
				<textarea
					type="text"
					name="floating_email"
					id="floating_email"
					class="block py-2.5 px-0 w-full text-sm 2xl:text-lg text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
					:value="message"
				/>
				<label
					for="floating_email"
					class="peer-focus:font-medium absolute text-sm 2xl:text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>{{ $t('Contact6') }}</label
				>
			</div>
			<!-- <pre>
				{{ contactFormData }}
			</pre> -->

			<button
				type="submit"
				class="btn btn-primary h-12 px-8 rounded-full text-xl hover:bg-yellow-400 hover:border-transparent"
			>
				{{ $t('Submit') }}
			</button>
		</form>
	</div>
</template>

<script setup>
	defineProps({
		firstName: String,
		lastName: String,
		email: String,
		phone: String,
		company: String,
		message: String,
		// submitForm: Object,
	});

	defineEmits([
		'update:firstName',
		'update:lastName',
		'update:email',
		'update:phone',
		'update:company',
		'update:message',
		// 'submitForm',
	]);
</script>

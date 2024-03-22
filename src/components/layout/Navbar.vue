<script setup>
	import { ref } from 'vue';
	import { RouterLink, useRoute } from 'vue-router';
	import EnIcon from '@/components/EnIcon.vue';
	import EsIcon from '@/components/EsIcon.vue';

	const isVisible = ref(false);
	const menuVisible = () => {
		isVisible.value = !isVisible.value;
	};

	const route = useRoute();

	const isActive = routeName => {
		return routeName === route.name;
	};
</script>

<template>
	<div
		class="navbar sticky top-0 bg-base-200 h-20 z-50 shadow-md shadow-slate-900 pl-2 pr-7 md:px-[5%] flex justify-between"
	>
		<div class="flex gap-2 lx:gap-16">
			<!-- Mobile Menu -->
			<div class="flex-none lg:hidden relative">
				<button class="btn btn-square btn-ghost text-slate-200" @click="menuVisible">
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
				<div
					id="resp-menu"
					class="absolute top-[70px] -left-[15px] w-[220px] p-5 bg-[#0F172A] shadow-lg shadow-slate-500"
					:class="isVisible ? 'visible' : 'hidden'"
				>
					<ul class="menu px-1 text-slate-200 text-lg font-medium">
						<li
							class="h-16 hover:text-yellow-300"
							:class="{
								'text-yellow-400': isActive('home'),
								'border-b-2 border-yellow-400': isActive('home'),
							}"
						>
							<RouterLink @click="menuVisible" :to="{ name: 'home' }">
								{{ $t('Home') }}
							</RouterLink>
						</li>
						<li
							class="h-16 hover:text-yellow-300"
							:class="{
								'text-yellow-400': isActive('about'),
								'border-b-2 border-yellow-400': isActive('about'),
							}"
						>
							<RouterLink @click="menuVisible" :to="{ name: 'about' }">
								{{ $t('About') }}
							</RouterLink>
						</li>
						<li
							class="h-16 hover:text-yellow-300"
							:class="{
								'text-yellow-400': isActive('blog'),
								'border-b-2 border-yellow-400': isActive('blog'),
							}"
						>
							<RouterLink @click="menuVisible" :to="{ name: 'blog' }">
								{{ $t('Blog') }}
							</RouterLink>
						</li>
						<li
							class="h-12 hover:text-yellow-300"
							:class="{
								'text-yellow-400': isActive('contact'),
								'border-b-2 border-yellow-400': isActive('contact'),
							}"
						>
							<RouterLink @click="menuVisible" :to="{ name: 'contact' }">
								{{ $t('Contact') }}
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>

			<!-- Logo DoulosDev -->
			<div class="flex-1">
				<RouterLink :to="{ name: 'home' }">
					<img
						src="../../assets/img/DoulosDev.svg"
						alt="Logo Francisco Zapata"
						class="h-[46px] md:h-[54px] w-auto pt-2"
					/>
				</RouterLink>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden lg:flex ml-10 4xl:ml-16">
				<ul class="menu menu-horizontal px-1 text-slate-200 text-lg font-medium">
					<li
						class="hover:text-yellow-300"
						:class="{
							'text-yellow-400': isActive('home'),
							'border-b-2 border-yellow-400': isActive('home'),
						}"
					>
						<RouterLink :to="{ name: 'home' }"> {{ $t('Home') }} </RouterLink>
					</li>
					<li
						class="hover:text-yellow-300"
						:class="{
							'text-yellow-400': isActive('about'),
							'border-b-2 border-yellow-400': isActive('about'),
						}"
					>
						<RouterLink :to="{ name: 'about' }"> {{ $t('About') }} </RouterLink>
					</li>
					<li
						class="hover:text-yellow-300"
						:class="{
							'text-yellow-400': isActive('blog'),
							'border-b-2 border-yellow-400': isActive('blog'),
						}"
					>
						<RouterLink :to="{ name: 'blog' }"> {{ $t('Blog') }} </RouterLink>
					</li>
					<li
						class="hover:text-yellow-300"
						:class="{
							'text-yellow-400': isActive('contact'),
							'border-b-2 border-yellow-400': isActive('contact'),
						}"
					>
						<RouterLink :to="{ name: 'contact' }"> {{ $t('Contact') }} </RouterLink>
					</li>
				</ul>
			</div>
		</div>

		<!-- Language Select -->
		<div>
			<button
				class="flex gap-2"
				@click="$i18n.locale = 'es'"
				v-if="$i18n.locale === 'en'"
			>
				<EsIcon class="w-6 h-6" />
				<span class="text-white font-medium">ES</span>
			</button>
			<button class="flex gap-2" @click="$i18n.locale = 'en'" v-else>
				<EnIcon class="w-6 h-6" />
				<span class="text-white font-medium">EN</span>
			</button>
		</div>
	</div>
</template>

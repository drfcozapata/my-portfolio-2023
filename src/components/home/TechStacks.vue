<template>
	<div class="lg:px-[120px] mb-10">
		<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			My Stacks
		</h2>
		<h3 class="text-3xl font-semibold ml-5 mb-5">Frontend</h3>
		<div
			class="w-full lg:w-[90%] flex flex-wrap gap-[20px] md:gap-x-[35px] lg:gap-x-[30px] justify-center lg:justify-around mx-auto px-5 items-center"
		>
			<div class="tooltip" data-tip="HTML5">
				<img src="@/assets/img/01-html5.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="CSS3">
				<img src="@/assets/img/02-css3.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="JavaScript">
				<img src="@/assets/img/03-javascript.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="TypeScript">
				<img src="@/assets/img/04-typescript.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Vue.js">
				<img src="@/assets/img/05-vuejs.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Vuetify">
				<img src="@/assets/img/06-vuetify.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Pinia">
				<img src="@/assets/img/07-pinia.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="VueUse">
				<img src="@/assets/img/08-vueuse.svg" alt="" class="h-[75px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Nuxt.js">
				<img src="@/assets/img/09-nuxt.svg" alt="" class="h-[75px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Axios">
				<img src="@/assets/img/10-axios.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="React.js">
				<img src="@/assets/img/11-react.svg" alt="" class="h-[75px] lg:h-[60px]" />
			</div>
			<div class="tooltip" data-tip="Redux">
				<img src="@/assets/img/12-redux.svg" alt="" class="h-[75px] lg:h-[60px]" />
			</div>
			<div class="tooltip" data-tip="Bootstrap">
				<img src="@/assets/img/13-bootstrap.svg" alt="" class="h-[65px] lg:h-[60px]" />
			</div>
			<div class="tooltip" data-tip="TailwindCSS">
				<img src="@/assets/img/14-tailwind-css.svg" alt="" class="h-[65px] lg:h-[60px]" />
			</div>
			<div class="tooltip" data-tip="Material UI">
				<img src="@/assets/img/15-material-ui.svg" alt="" class="h-[65px] lg:h-[60px]" />
			</div>
			<div class="tooltip" data-tip="SASS/SCSS">
				<img src="@/assets/img/16-sass.svg" alt="" class="h-[80px] lg:h-[70px]" />
			</div>
		</div>

		<h3 class="text-3xl font-semibold ml-5 mt-10 mb-5">Backend</h3>
		<div
			class="w-full lg:w-[95%] flex flex-wrap gap-[20px] md:gap-x-[30px] lg:gap-[20px] justify-center lg:justify-around mx-auto px-5 items-center"
		>
			<div class="tooltip" data-tip="Node.js">
				<img src="@/assets/img/17-nodejs.svg" alt="" class="h-[75px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Express.js">
				<img src="@/assets/img/18-express-js.svg" alt="" class="h-[75px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Laravel">
				<img src="@/assets/img/19-laravel.svg" alt="" class="h-[75px] lg:h-[70px]" />
			</div>
			<div class="tooltip" data-tip="Laravel Blade">
				<img
					src="@/assets/img/20-laravel-blade.svg"
					alt=""
					class="h-[75px] lg:h-[70px]"
				/>
			</div>
			<!-- <img src="@/assets/img/21-laravel-breeze.svg" alt="" class="h-[60px]" /> -->
			<!-- <img src="@/assets/img/22-apache.svg" alt="" /> -->
			<div class="tooltip" data-tip="MySQL">
				<img
					src="@/assets/img/23-mysql.svg"
					alt=""
					class="h-[60px] md:h-[70px] lg:h-[60px]"
				/>
			</div>
			<div class="tooltip" data-tip="PostgreSQL">
				<img
					src="@/assets/img/24-postgresql.svg"
					alt=""
					class="h-[50px] md:h-[70px] lg:h-[50px]"
				/>
			</div>
			<!-- <img src="@/assets/img/25-mariadb.svg" alt="" class="h-[80px] h-[70px]" /> -->
		</div>

		<h3 class="text-3xl font-semibold ml-5 mt-10 mb-5">No Code</h3>
		<div
			class="w-full flex flex-wrap gap-[20px] md:gap-x-[50px] justify-center mx-auto px-5 items-center"
		>
			<div class="tooltip" data-tip="WordPress">
				<img src="@/assets/img/26-wordpress.svg" alt="" class="h-[50px] md:h-[65px]" />
			</div>
			<div class="tooltip" data-tip="Elementor">
				<img src="@/assets/img/27-elementor.svg" alt="" class="h-[60px] lg:h-[70px]" />
			</div>
		</div>

		<h3 class="text-3xl font-semibold ml-5 mt-10 mb-5">Auxiliar Techs</h3>
		<div
			class="w-full lg:w-[85%] flex flex-wrap gap-[15px] md:gap-x-[20px] lg:gap-x-[50px] justify-center mx-auto px-5 items-center"
		>
			<div class="tooltip" data-tip="Ubuntu Linux">
				<img src="@/assets/img/28-ubuntu.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Vite">
				<img src="@/assets/img/29-vite.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="VScode">
				<img src="@/assets/img/30-vscode.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Git">
				<img src="@/assets/img/31-git.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="GitHub">
				<img src="@/assets/img/32-github.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="npm">
				<img src="@/assets/img/33-npm.svg" alt="" class="h-[25px] lg:h-[15px]" />
			</div>
			<div class="tooltip" data-tip="yarn">
				<img src="@/assets/img/34-yarn.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="pnpm">
				<img src="@/assets/img/35-pnpm.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Firebase">
				<img src="@/assets/img/36-firebase.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Supabase">
				<img src="@/assets/img/37-supabase.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Google Cloud">
				<img src="@/assets/img/38-google-cloud.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Netlify">
				<img src="@/assets/img/39-netlify.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Vercel">
				<img src="@/assets/img/40-vercel.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Jira">
				<img src="@/assets/img/41-jira.svg" alt="" class="h-[40px]" />
			</div>
			<div class="tooltip" data-tip="Slack">
				<img src="@/assets/img/42-slack.svg" alt="" class="h-[25px]" />
			</div>
			<div class="tooltip" data-tip="Zoom">
				<img src="@/assets/img/43-zoom.svg" alt="" class="h-[20px]" />
			</div>
			<div class="tooltip" data-tip="Google Meet">
				<img src="@/assets/img/44-google-meet.svg" alt="" class="h-[25px]" />
			</div>
			<!-- <img src="@/assets/img/45-discord.svg" alt="" class="h-[40px]" /> -->
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

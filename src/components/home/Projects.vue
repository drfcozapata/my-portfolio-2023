<template>
	<section class="min-h-[120vh] lg:px-[120px] mb-20 projects">
		<h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-5 mb-10">
			My Projects
		</h2>
		<div class="lg:w-3/4 mx-auto px-10 md:px-20 lg:px-0">
			<p class="text-base md:text-lg mb-5">
				During the last 3 years I have developed several projects: landing pages,
				e-commerces, frontend of complete websites and fullstack sites (frontend and
				backend) using different technologies.
			</p>
			<p class="text-base md:text-lg mb-5">
				Not all my creations are available to be shown because many times I am
				subcontracted by agencies and my role goes up to the development of the code,
				being them who deploy the sites, and I don't know the url's of them.
			</p>
			<p class="text-base md:text-lg mb-5">
				I show here only some personal projects created during my training and the few
				that I have managed to deploy completely by myself.
			</p>
			<p class="text-base md:text-lg mb-10">
				Personal fullstack projects developed during 2021-2022 suffered the loss of their
				backend with the change of Heroku's policy, where they were hosted for free. That
				is why they are not included.
			</p>
		</div>

		<article
			class="md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 lg:grid-rows-3 md:gap-10 lg:w-3/4 mx-auto px-10 md:px-20 lg:px-0 mb-10"
		>
			<RouterLink to="/project/1">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-01.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Guadalajara Web Camp</h2>
						<p>
							My first personal project, part of the Udemy course "Desarrollo Web
							Completo" I took in 2020.
						</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/2">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-02.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Rock & EDM Festival</h2>
						<p>
							My second personal project, part of the Udemy course "Desarrollo Web
							Completo" I took in 2020.
						</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/3">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-03.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Blog de Café</h2>
						<p>
							My third personal project, part of the Udemy course "Desarrollo Web
							Completo" I took in 2020.
						</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/4">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-04.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Portafolio 2021</h2>
						<p>
							My first portfolio, created as a requirement of my studies at Academlo
							(2021).
						</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/5">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-05.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">I Love My Yacht</h2>
						<p>Website of "I Love My Yacht", a company located in Florida, USA (2022).</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/6">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-06.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Iglesia Bautista Fe</h2>
						<p>Website of Faith Baptist Church located in Fortworth, TX, USA (2022).</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/7">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-07.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">EwexCar</h2>
						<p>
							I was part of the UPH&Blue Group team that developed the frontend of the
							EwexCar website.
						</p>
					</div>
				</div>
			</RouterLink>
			<RouterLink to="/project/8">
				<div class="card card-compact w-full bg-base-100 shadow-xl mb-10 md:mb-0">
					<figure class="h-[200px] image">
						<img src="project-08.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Vue 3 New Documentation</h2>
						<p>
							I coordinated the team translating the new Vue 3 documentation into Spanish
							(awaiting publication by the Vue Core Team).
						</p>
					</div>
				</div>
			</RouterLink>
			<!-- <div class="card card-compact w-full bg-base-100 shadow-xl">
				<figure class="h-[200px] image">
					<img src="../../assets/img/project-08.png" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Guadalajara</h2>
					<p>My first personal project</p>
				</div>
			</div> -->
		</article>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
	.projects {
		background-color: #f1f1f1;
		background-image: url(../../assets/img/bg-stripes.svg);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 70vh;
		padding: 80px 0;
		clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 80px));

		.card {
			will-change: transform;
			transition: transform 500ms ease;

			&:hover {
				transform: scale(1.04) rotate(-2deg);
			}

			.image {
				align-items: flex-start !important;
			}
		}
	}
</style>

<script>
	import ScrollButtons from '$lib/components/small-elements/ScrollButtons.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let gallery;
	let mm = gsap.matchMedia();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		mm.add('(min-width: 48rem)', () => {
			gsap.to(gallery, {
				xPercent: -100,
				// x: () => innerWidth,
				ease: 'none',
				scrollTrigger: {
					trigger: gallery,
					start: 'top top',
					end: () => '+=' + gallery.offsetWidth,
					scrub: 2,
					pin: true,
					anticipatePin: 1,
					invalidateOnRefresh: true
					// markers: true
				}
			});
		});
	});
</script>

<section class="projects" id="projects">
	<!-- Projects heading text -->
	<h2 class="heading">PROJECTS</h2>

	<!-- Scroll buttons menu -->
	<ScrollButtons />

	<!-- Projects gallery -->
	<div class="project-gallery" bind:this={gallery}>
		<!-- Project card -->
		<div class="project-card">
			<div class="project-text">
				<h2 class="project-title">Lifely</h2>
				<p class="project-desc">
					Landing page for getting started with AI.<br /> Find information about the AI design sprint
					and how it can change and automate company processes.
				</p>
			</div>
			<picture class="project-img-wrap">
				<source class="project-img" srcset="/img/lifely.webp" type="image/webp" />
				<img class="project-img" src="/img/lifely.png" alt="" width="1024" height="556" />
			</picture>
		</div>

		<div class="project-card">
			<div class="project-text text-right">
				<h2 class="project-title">UltiTV</h2>
				<p class="project-desc">
					A tool for commentating on Ultimate Frisbee games.<br /> View game stats, player stats and
					player facts.
				</p>
			</div>
			<picture class="project-img-wrap">
				<source class="project-img" srcset="/img/ultitv.webp" type="image/webp" />
				<img class="project-img" src="/img/ultitv.png" alt="" width="1024" height="625" />
			</picture>
		</div>

		<div class="project-card">
			<div class="project-text text-middle">
				<h2 class="project-title">Vervoerregio</h2>
				<p class="project-desc">
					A tool for checking accessibility on your website.<br /> Find possible accessibility improvements.
				</p>
			</div>
			<picture class="project-img-wrap">
				<source class="project-img" srcset="/img/vervoerregio.webp" type="image/webp" />
				<img class="project-img" src="/img/vervoerregio.png" alt="" width="1024" height="556" />
			</picture>
		</div>
	</div>
</section>

<style>
	.projects {
		overflow: hidden;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.heading {
		font-size: 4em;
		font-weight: normal;
		position: relative;
		text-transform: uppercase;
		padding-right: 2rem;
		margin-left: auto;
		margin-bottom: 3rem;
	}

	.heading::after {
		content: 'PROJECTS';
		white-space: pre;
		color: transparent;
		position: absolute;
		left: 2px;
		top: -2px;
		-webkit-text-stroke: 1px #fff;
		padding-right: 2rem;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 5rem;
	}

	.project-text {
		display: flex;
		flex-direction: column;
		width: 90%;
		margin: 0 auto 1rem auto;
	}

	.text-right {
		align-items: flex-end;
	}

	.text-right .project-desc {
		text-align: right;
	}

	.project-title {
		font-size: 3em;
		font-weight: normal;
		color: transparent;
		-webkit-text-stroke: 1px #fff;
		line-height: 0.9;
		margin-bottom: 0.5rem;
	}

	.project-img-wrap {
		width: 90%;
		margin: 0 auto;
		position: relative;
	}

	.project-img-wrap::after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0.6;
	}

	.project-img {
		width: 100%;
		height: auto;
		filter: grayscale(100%);
	}

	@media (min-width: 39rem) {
		.project-title {
			font-size: 3.2em;
		}

		.project-desc {
			font-size: 1.2em;
		}
	}

	@media (min-width: 48rem) {
		.projects {
			width: unset;
			min-height: unset;
			overflow: unset;
			padding-bottom: 180vh;
			overflow: hidden;
		}
		.heading {
			font-size: 6em;
			right: 5rem;
		}

		.project-gallery {
			height: 100vh;
			width: calc(175vw + 22rem);
			display: flex;
			flex-direction: row;
			position: relative;
			gap: 5rem;
			margin-left: 15rem;
		}

		.project-card {
			flex-direction: row;
			justify-content: center;
			width: 100vw;
			height: 100vh;
			align-items: center;
			position: relative;
		}

		.project-text {
			position: absolute;
			z-index: 2;
			bottom: 29%;
			left: -3rem;
			/* background: #3a3a3a40; */
			padding: 0.4rem;
			width: unset;
			max-width: 24rem;
		}

		.text-right {
			align-items: flex-start;
			bottom: 54%;
		}

		.text-right .project-desc {
			text-align: left;
		}

		.text-middle {
			bottom: 41%;
		}

		.project-img-wrap {
			margin-left: 5rem;
		}

		.project-img {
			width: 38rem;
		}
	}

	@media (min-width: 90rem) {
		.projects {
			padding-bottom: 335vh;
		}
	}
</style>

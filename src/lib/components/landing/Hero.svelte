<script>
	import ScrollButtons from '$lib/components/small-elements/ScrollButtons.svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	const heroTl = gsap.timeline({ defaults: { duration: 0.6 } });

	onMount(() => {
		const leftTextRows = document.querySelectorAll('.hero-text-left');
		leftTextRows.forEach((e, i) => {
			let row_width = e.getBoundingClientRect().width;
			let row_item_width = e.children[0].getBoundingClientRect().width;
			let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
			let x_translation = initial_offset * -1;
			console.log(x_translation);

			gsap.set(e, {
				xPercent: `${initial_offset}`
			});

			let duration = 35 * (i + 1);

			var tl = gsap.timeline();

			tl.to(e, {
				ease: 'none',
				duration: duration,
				xPercent: 0,
				repeat: -1
			});
		});

		const rightTextRows = document.querySelectorAll('.hero-text-right');
		rightTextRows.forEach((e, i) => {
			let row_width = e.getBoundingClientRect().width;
			let row_item_width = e.children[0].getBoundingClientRect().width;
			let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
			let x_translation = initial_offset * -1;
			console.log(x_translation);

			gsap.set(e, {
				xPercent: `${initial_offset}`
			});

			let duration = 35 * (i + 1);

			var tl = gsap.timeline();

			tl.from(e, {
				ease: 'none',
				duration: duration,
				xPercent: 0,
				repeat: -1
			});
		});

		heroTl.from('.pre-name', {
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
			delay: 0.8
		});

		heroTl.from('.pre-name', {
			xPercent: 20
		});

		heroTl.from('.first-name, .last-name', {
			clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
			stagger: 0.1
		});

		heroTl.from('.hero-btn', {
			x: -500,
			opacity: 0,
			duration: 1.2
		});

		heroTl.from('.left-text', {
			x: -500,
			opacity: 0,
			duration: 1.2
		});

		heroTl.from('.right-text', {
			x: 500,
			opacity: 0,
			duration: 1.2
		});
	});
</script>

<section class="hero" id="hero">
	<!-- Intro and name -->
	<div class="hero-title">
		<p class="pre-name">Hi, i'm</p>
		<p class="first-name">Tristan</p>
		<p class="last-name">De Muijnck</p>
	</div>

	<a href="#projects" class="hero-btn">Projects</a>

	<!-- Background text -->
	<div class="hero-text-left">
		<p class="bg-text left-text">App developer</p>
		<p class="bg-text left-text colored-text">App developer</p>
		<p class="bg-text left-text">App developer</p>
		<p class="bg-text left-text colored-text">App developer</p>
		<p class="bg-text left-text">App developer</p>
		<p class="bg-text left-text colored-text">App developer</p>
	</div>
	<div class="hero-text-right">
		<p class="bg-text right-text colored-text">Student FDND</p>
		<p class="bg-text right-text">Student FDND</p>
		<p class="bg-text right-text colored-text">Student FDND</p>
		<p class="bg-text right-text">Student FDND</p>
		<p class="bg-text right-text colored-text">Student FDND</p>
        <p class="bg-text right-text">Student FDND</p>
	</div>

	<!-- Scroll buttons menu -->
	<ScrollButtons />
</section>

<style>
	.hero {
		width: 100%;
		height: 93vh;
		display: flex;
		flex-direction: column;
		padding: 6em 0 0 2rem;
		overflow: hidden;
		position: relative;
	}

	.hero-title {
		padding-bottom: 1rem;
	}

	.pre-name {
		font-size: 3em;
		color: transparent;
		-webkit-text-stroke: 1px #fff;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}

	.first-name,
	.last-name {
		font-size: 4em;
		font-weight: normal;
		line-height: 0.9;
		position: relative;
		text-transform: uppercase;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
	}

	.first-name::after {
		content: 'Tristan';
		white-space: pre;
		color: transparent;
		position: absolute;
		left: 2px;
		top: -2px;
		-webkit-text-stroke: 1px #fff;
	}

	.last-name::after {
		content: 'De Muijnck';
		color: transparent;
		position: absolute;
		left: 2px;
		top: -2px;
		-webkit-text-stroke: 1px #fff;
	}

	.hero-btn {
		border: solid 1px white;
		padding: 0.2em 0.5em;
		letter-spacing: 5px;
		font-size: 1.1em;
		color: white;
		margin-right: auto;
	}

	.hero-text-left,
	.hero-text-right {
		position: relative;
		display: flex;
		text-align: center;
		white-space: nowrap;
	}

	.bg-text {
		color: transparent;
		font-size: 6em;
		-webkit-text-stroke: 1px #fff;
		opacity: 0.3;
		position: absolute;
		white-space: nowrap;
		line-height: 100%;
	}

	.colored-text {
		color: #ffffff;
		opacity: 0.7;
	}

	.left-text {
		top: 13rem;
		left: -2.5rem;
		position: relative;
		flex: 0 0 33%;
	}

	.right-text {
		top: 14rem;
		left: -8.5rem;
		position: relative;
	}

	@media (min-width: 39rem) {
		.hero-title {
			margin-left: 3rem;
		}

		.pre-name {
			font-size: 4em;
		}

		.first-name,
		.last-name {
			font-size: 5em;
		}

		.hero-btn {
			font-size: 1.5em;
			margin-left: 3rem;
		}

		.bg-text {
			font-size: 8em;
		}
	}

	@media (min-width: 48rem) {
		.hero-title {
			margin-left: 5rem;
		}

		.hero-btn {
			margin-left: 5rem;
		}

		.left-text {
			left: -3rem;
		}

		.right-text {
			/* top: 17rem; */
			right: -1rem;
		}
	}
</style>

<section class="projects" id="projects">
	<!-- Projects gallery -->
	<h2 class="heading">PROJECTS</h2>
	<div class="project-gallery">
		<div class="project-card-wrapper">
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

            <a href="#projects" class="hero-btn">More Projects</a>
		</div>
	</div>
</section>

<style>
	@keyframes move {
		to {
			transform: translateX(calc(-100% + 100vw));
			left: 0px;
		}
	}

	.projects {
		width: 100%;
		min-height: 100vh;
        margin-bottom: 4rem;
	}

    .project-gallery{
        margin: 0 1rem;
    }

    .project-card-wrapper {
        position: relative;
    }

	.heading {
		font-size: 4em;
		font-weight: normal;
		position: relative;
		text-transform: uppercase;
		margin-left: auto;
		text-align: right;
        margin-bottom: 2rem;
		padding-right: 2rem;
	}

	.heading::after {
		content: 'PROJECTS';
		white-space: pre;
		color: transparent;
		position: absolute;
		right: -2px;
		top: -2px;
		-webkit-text-stroke: 1px #fff;
		padding-right: 2rem;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: 3rem;
        position: relative;
		/* background-color: rgba(18, 18, 18, 0.85); */
        /* padding: 3rem 1rem; */
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

    .hero-btn{
        border: solid 1px white;
        padding: 0.2em 0.5em;
        letter-spacing: 5px;
        font-size: 1.1em;
        color: white;
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
			height: 500vh;
			overflow: visible;
			view-timeline-name: --section-pin-tl;
			view-timeline-axis: block;
			max-width: 100vw;
		}

		.heading {
			font-size: 6em;
			right: 5rem;
            margin-bottom: 0;
		}

		.project-gallery {
			height: 100vh;
			width: 100vw;
			position: sticky;
			top: 0;
			overflow-x: hidden;
		}

		.project-card-wrapper {
			height: 100vh;
			width: 330vmax;

			will-change: transform;
			animation: linear move forwards;

			animation-timeline: --section-pin-tl;
			animation-range: contain 7% contain 100%;

			display: flex;
			align-items: center;
            justify-content: space-evenly;
			padding: 50px 10vw;
            gap: 10rem;
		}

		.project-card-wrapper > .project-card {
			min-width: 10vmax;
			padding: 0 5vmax;
            width: unset;
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
			width: 33rem;
		}

        .hero-btn {
            width: 11rem;
            position: relative;
            text-align: center;
        }
	}

    @media (min-width: 64rem){
        .project-card-wrapper{
            width: 310vmax;
        }

        .project-img {
			width: 37rem;
		}
    }

    @media (min-width: 75rem){
        .project-card-wrapper{
            width: 301vmax;
        }
    }

    @media (min-width: 90rem){
        .project-card-wrapper{
            width: 286vmax;
        }

        .project-img {
			width: 45rem;
		}
    }
</style>

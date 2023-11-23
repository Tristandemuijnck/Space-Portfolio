<script>
    import ScrollButtons from "$lib/components/small-elements/ScrollButtons.svelte";
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
    </div>
    <div class="hero-text-right">
        <p class="bg-text right-text">Student FDND</p>
    </div>

    <!-- Scroll buttons menu -->
    <ScrollButtons />
</section>

<style>
    .hero{
        width: 100%;
        height: 93vh;
        display: flex;
        flex-direction: column;
        padding: 6em 0 0 2rem;
        overflow: hidden;
        position: relative;
    }

    .hero-title{
        padding-bottom: 1rem;
    }

    .pre-name{
        font-size: 3em;
        color: transparent;
        -webkit-text-stroke: 1px #fff;
    }

    .first-name, .last-name{
        font-size: 4em;
        font-weight: normal;
        line-height: 0.8;
        position: relative;
        text-transform: uppercase;
    }

    .first-name::after{
        content: "Tristan";
        white-space: pre;
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
    }

    .last-name::after{
        content: "De Muijnck";
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
    }

    .hero-btn{
        border: solid 1px white;
        padding: 0.2em 0.5em;
        letter-spacing: 5px;
        font-size: 1.1em;
        color: white;
        margin-right: auto;
    }

    .hero-text-left, .hero-text-right{
        position: relative;
    }

    .bg-text{
        color: transparent;
        -webkit-text-stroke: 1px #fff;
        font-size: 6em;
        opacity: 0.3;
        position: absolute;
        white-space: nowrap;
    }

    .left-text{
        top: 6rem;
        left: -15.5rem;
    }

    .right-text{
        top: 16rem;
        right: -13.6rem;
    }

    @media (min-width: 39rem){
        .hero-title{
            margin-left: 3rem;
        }

        .pre-name{
            font-size: 4em;
        }

        .first-name, .last-name{
            font-size: 5em;
        }

        .hero-btn{
            font-size: 1.5em;
            margin-left: 3rem;
        }

        .bg-text{
            font-size: 8em;
        }
    }

    @media (min-width: 48rem){
        .hero-title{
            margin-left: 5rem;
        }

        .hero-btn{
            margin-left: 5rem;
        }

        .left-text{
            left: -3rem;
        }

        .right-text{
            top: 17rem;
            right: -1rem;
        }
    }
</style>
<script>
    import ScrollButtons from "$lib/components/small-elements/ScrollButtons.svelte";
</script>

<section class="contact" id="contact">

    <!-- Contact heading text -->
    <h2>CONTACT</h2>

    <!-- Scroll buttons menu -->
    <ScrollButtons />

    <!-- Background text -->
    <p class="bg-text">FIND ME</p>

    <!-- Contact info -->
    <div class="contact-info">
        <div class="contact-left">
            <div class="icons">
                <a href="https://github.com/Tristandemuijnck"><img src="/img/icons/github.svg" alt="" class="icon" width="65" height="65"></a>
                <a href="https://www.linkedin.com/in/tristandemuijnck/"><img src="/img/icons/linkedin.svg" alt="" class="icon" width="65" height="65"></a>
                <!-- <a href="https://www.instagram.com/tristandemuijnck/"><img src="/img/icons/instagram.svg" alt="" class="icon" width="65" height="65"></a> -->
            </div>
            <p class="contact-text">Tristandemuijnck</p>
        </div>
        <div class="contact-right">
            <img src="/img/icons/mail.svg" alt="" class="icon" width="65" height="65">
            <p class="contact-text">tristandemuijnck@hotmail.com</p>
        </div>
    </div>

</section>

<style>
    .contact{
        width: 100%;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    h2{
        font-size: 4em;
        font-weight: normal;
        position: relative;
        text-transform: uppercase;
        padding-left: 2rem;
        margin-bottom: 4rem;
    }

    h2::after{
        content: "CONTACT";
        white-space: pre;
        color: transparent;
        position: absolute;
        left: 2px;
        top: -2px;
        -webkit-text-stroke: 1px #fff;
        padding-left: 2rem;
    }

    .bg-text{
        display: none;
    }

    .contact-info{
        width: 90%;
        margin: 0 auto 4rem auto;
        display: flex;
        flex-direction: column;
    }

    .contact-left{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
    }

    .icons{
        display: flex;
        gap: 1rem;
    }

    .icon{
        width: 2rem;
        height: auto;
    }

    .contact-text{
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
    }

    .contact-left::after{
        content: "";
        width: 66%;
        height: 1px;
        background-color: var(--third-color);
    }

    .contact-right{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-top: 2rem;
    }

    @media (min-width: 39rem){
        .icon{
            width: 2.5rem;
        }

        .contact-text{
            font-size: 1.5em;
        }
    }

    @media (min-width: 48rem){
        .contact{
            flex-direction: row-reverse;
            align-items: center;
            min-height: 100vh;
        }
        h2{
            writing-mode: vertical-rl;
            font-size: 6rem;
        }

        .bg-text{
            display: flex;
            position: absolute;
            left: -0.7rem;
            top: 0rem;
            color: transparent;
            -webkit-text-stroke: 1px #fff;
            font-size: 8em;
            opacity: 0.3;
        }
    }
</style>
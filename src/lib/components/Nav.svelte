<script>
    let isMenuOpen = false

    function toggleMenu() {
        isMenuOpen = !isMenuOpen
    }
</script>

<nav>
    <!-- Logo -->
    <a class="logo-link" href="/">
        <svg class="logo" width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#fff"><path d="m54.71 53.94-3.1-9.31c-.03-.1-.02-.21.04-.29 1.44-2.22 2.5-4.7 3.12-7.35.02-.1.09-.18.18-.23l8.86-4.43c.26-.13.26-.5 0-.63l-8.69-4.35a.337.337 0 0 1-.18-.24 23.06 23.06 0 0 0-3.28-8.08.337.337 0 0 1-.04-.29l3.1-9.31a.356.356 0 0 0-.45-.45l-9.31 3.1c-.1.03-.21.02-.29-.04a23.089 23.089 0 0 0-7.91-3.25.365.365 0 0 1-.24-.18L32.32.2a.352.352 0 0 0-.63 0l-4.2 8.39c-.05.09-.13.16-.24.18a23.37 23.37 0 0 0-7.91 3.25c-.09.06-.2.07-.29.04l-9.31-3.1a.356.356 0 0 0-.45.45l3.1 9.31c.03.1.02.21-.04.29-1.57 2.43-2.7 5.16-3.29 8.09l-.18.24L.2 31.68c-.26.13-.26.5 0 .63l8.55 4.27c.09.05.16.14.18.24.59 2.88 1.71 5.56 3.28 7.94.06.09.07.2.04.3l-2.96 8.87c-.09.28.17.54.45.45l8.92-2.97c.1-.03.21-.02.29.04 2.4 1.55 5.11 2.66 8.01 3.22.11.02.19.09.24.18l4.48 8.96c.13.26.5.26.63 0l4.57-9.14c.05-.09.13-.16.23-.18 2.72-.61 5.26-1.7 7.54-3.17.09-.06.2-.07.3-.04l9.31 3.1c.28.09.54-.17.45-.45v.01Zm-26.23-1.23-.84-8.91c-.03-.29-.38-.43-.59-.23l-6.62 6.02c-.12.11-.31.13-.45.03a21.656 21.656 0 0 1-5.34-5.12c-.1-.13-.09-.32.01-.45l5.7-6.89c.19-.23.04-.57-.26-.58l-8.96-.43c-.17 0-.31-.13-.34-.29-.27-1.36-.41-2.76-.41-4.19 0-1.09.1-2.16.26-3.21.02-.16.16-.29.32-.3l8.91-.84c.29-.03.43-.38.23-.59l-5.8-6.38a.363.363 0 0 1-.03-.46c1.48-2.03 3.31-3.78 5.41-5.17a.36.36 0 0 1 .43.02l6.38 5.28c.23.19.57.04.58-.26l.38-7.91c0-.17.13-.31.3-.34a20.479 20.479 0 0 1 7.58.09c.16.03.27.16.29.32l.72 7.63c.03.29.38.43.59.23l5.52-5.02c.12-.11.31-.13.44-.03 2.13 1.42 3.99 3.21 5.49 5.29.1.13.09.32-.02.44l-4.73 5.72c-.19.23-.04.57.26.58l7.51.36c.16 0 .3.12.33.28.37 1.56.59 3.19.59 4.87 0 .93-.08 1.84-.2 2.73-.02.16-.16.29-.32.31l-7.71.73c-.29.03-.43.38-.23.59l5.43 5.98c.11.12.13.29.04.43-1.3 2.17-2.97 4.09-4.94 5.66-.13.11-.33.1-.46 0l-6.48-5.36a.351.351 0 0 0-.58.26l-.42 8.8c0 .16-.12.3-.28.34-1.39.33-2.84.52-4.32.57-1.06 0-2.09-.1-3.1-.26a.351.351 0 0 1-.3-.32l.03-.02Z"/><path d="M29.89 26.48v1.74h-2.94v8.09h-2.07v-8.09h-2.95v-1.74h7.96ZM32.99 36.31h-1.91v-9.83h2.99l1.79 7.73 1.77-7.73h2.95v9.83h-1.91v-8.25l-1.86 8.25h-1.99l-1.85-8.25v8.25h.02Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath></defs></svg>
    </a>

    <!-- Menu button when collapsed -->
    <button on:click={toggleMenu} class="menu-btn" id="menu-btn">Menu</button>

    <!-- Close menu button when uncollapsed -->
    <div class="nav-close">
        <button on:click={toggleMenu} class="close-btn" class:open={isMenuOpen} id="close-btn">Close</button>
    </div>

    <!-- Navigation -->
    <div class="nav-overlay" class:open={isMenuOpen} id="nav-overlay">
        <div class="nav-content">
        <!-- Nav links -->
            <ul>
                <li><a href="#skills" on:click={toggleMenu}>Skills</a></li>
                <li><a href="#projects" on:click={toggleMenu}>Projects</a></li>
                <li><a href="#contact" on:click={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

<style>
    nav{
        width: 90%;
        margin: 0.6em auto 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7vh;
        z-index: 1;
    }

    .logo-link{
        display: flex;
    }

    .logo{
        transform: scale(0.75);
    }

    .menu-btn{
        background: none;
        border: none;
        color: var(--secondary-color);
        font-family: 'Bebas Neue', sans-serif;
        letter-spacing: 3px;
        font-size: 1.2em;
        display: block;
        position: relative;
    }

    .menu-btn:hover{
        cursor: pointer;
    }

    .menu-btn::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background: var(--secondary-color);
        transition: 250ms ease-in-out;
        margin: 0 auto;
    }

    .menu-btn:hover::after{
        width: 100%;
        transition: 250ms ease-in-out;
    }

    .nav-close{
        height: auto;
        position: fixed;
        justify-content: flex-end;
        right: 1em;
        z-index: 30;
    }

    .close-btn{
        display: none;
    }

    .close-btn.open{
        background: none;
        border: none;
        font-family: 'Bebas Neue', sans-serif;
        color: var(--secondary-color);
        letter-spacing: 3px;
        font-size: 1.2em;
        margin-right: 0.6em;
        display: flex;
    }

    .close-btn.open:hover{
        cursor: pointer;
    }

    .close-btn.open::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background: var(--secondary-color);
        transition: 250ms ease-in-out;
    }

    .close-btn.open:hover::after{
        width: calc(100% - 0.6em);
        transition: 250ms ease-in-out;
    }

    /* Overlay */
    .nav-overlay{
        display: none
    }

    .nav-overlay.open{
        position: fixed;
        top: 0;
        bottom: 0;
        left: auto;
        right: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        display: flex;
        opacity: 1;
    }

    .nav-content{
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        background: var(--faded-black);
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    li a{
        color: var(--secondary-color);
        font-size: 2.1em;
        position: relative;
    }

    li a::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0%;
        background: var(--secondary-color);
        transition: 250ms ease-in-out;
        margin: 0 auto;
    }

    li a:hover::after{
        width: 100%;
        transition: 250ms ease-in-out;
    }

    /* --------------------------------- Tablet --------------------------------- */
    @media (min-width: 48rem){
        .menu-btn{
            display: none;
        }

        .close-btn.open{
            display: none;
        }

        .nav-overlay, .nav-overlay.open{
            display: flex;
            position: initial;
            width: unset;
            height: unset;
        }

        .nav-content{
            background: unset;
        }

        ul{
            flex-direction: row;
            gap: 1em;
            align-items: flex-end;
        }

        li a{
            font-size: initial;
            font-size: 1.2em;
        }
    }
</style>
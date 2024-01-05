<script>
    import { assetsBasePath } from "$lib/path.js";

    const photos = [
        { photoLink: `https://vsco.co/jnncode/media/65612a2cb3e2174e1ada2871`, photoSource: `${assetsBasePath}images/GameBoy.jpeg` },
        { photoLink: `https://vsco.co/jnncode/media/658d003ede26f90b3ed77142`, photoSource: `${assetsBasePath}images/ChinaTown.jpeg` },
        { photoLink: `https://vsco.co/jnncode/media/658d0032de26f90b3ed77141`, photoSource: `${assetsBasePath}images/Tokyo.jpeg` },
        { photoLink: `https://vsco.co/jnncode/media/658cfff8de26f90b3ed77140`, photoSource: `${assetsBasePath}images/Astronaut.jpeg` },
    ];
</script>

<svelte:head>
	<title>Work</title>
	<meta name="description" content="JNNCODE Work" />
</svelte:head>

<div class="container">
    <h4 class="section">
        Codes
    </h4>
    <div class="slideshow">
        <div class="slides">
            <img src="{assetsBasePath}images/Spotify.png" class="slide-img" alt="slide 1" />
            <div class="slide-text">
                <div class="title">Mocked Spotify Web Player</div>
                <div class="description">Scrape API</div>
            </div>
        </div>
        <div class="arrows">
            <!-- <a class="previous" on:click="{next}">&#10094;</a>
            <a class="next" on:click="{previous}">&#10095;</a> -->
        </div>
    </div>
    <h4 class="section">
        Photos
    </h4>
    <div class="grid">
        {#each photos as {photoLink, photoSource}}
            <a href={photoLink} target="_blank" rel="noopener noreferrer">
                <img src={photoSource} class="photos" alt="photos" />
            </a>
        {/each}
    </div>
    <h4 class="section">
        Prints
    </h4>
</div>

<style>
	.container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .section {
        border-color: #ffffff;
        border-style: solid;
        color: #ffffff;
        width: 18rem;
        text-align: center;
    }
    .slideshow {
        margin: 0;
    }
    .slide-img {
        max-width: 100%;
        height: auto;
    }
    .slide-text {
        position: relative;
        text-align: center;
    }
    .title {
        font-weight: 900;
    }
    .description {
        font-weight: 600;
        font-size: small;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        color: #ffffff;
    }
    .photos {
        border-color: #ffffff;
        border-style: solid;
        border-width: 0.15rem;
        width: 12rem;
        height: 12rem;
    }
    .arrows {
        position: relative;
        text-align: center;
        top: 0.75rem;
    }
    /* .previous, .next {
        cursor: pointer;
        font-weight: 900;
        color: #ffffff;
    } */
    @media (max-width: 768px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        }
    }
</style>
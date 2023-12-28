<script>
    import { assetsBasePath } from "$lib/path.js";
    const videos = [
		{ videoLink: "https://www.github.com/jnncode/Fitts_Law", videoSource: `${assetsBasePath}videos/FittsLaw.mp4` },
        { videoLink: "https://www.github.com/jnncode/Run_Astro", videoSource: `${assetsBasePath}videos/RunAstro.mp4` },
		{ videoLink: "https://www.github.com/jnncode/Spotify_Web_Player", videoSource: `${assetsBasePath}videos/Spotify.mp4` },
        {},
    ];
    const photos = [
        { photoLink: `${assetsBasePath}images/GameBoy.jpeg`, photoSource: `${assetsBasePath}images/GameBoy.jpeg` },
        { photoLink: `${assetsBasePath}images/ChinaTown.jpeg`, photoSource: `${assetsBasePath}images/ChinaTown.jpeg` },
        { photoLink: `${assetsBasePath}images/Tokyo.jpeg`, photoSource: `${assetsBasePath}images/Tokyo.jpeg` },
        { photoLink: `${assetsBasePath}images/Astronaut.jpeg`, photoSource: `${assetsBasePath}images/Astronaut.jpeg` },
    ];
    // TBD for prints.
</script>

<svelte:head>
	<title>work.</title>
	<meta name="description" content="JNNCODE Work" />
</svelte:head>

<div class="container">
    <div class="grid">
        codes.
            {#each videos as {videoLink, videoSource}}
                <a href={videoLink} target="_blank" rel="noopener noreferrer">
                    <video class="videos" controls muted preload="auto">
                        <source src={videoSource} type="video/mp4">
                    </video>
                </a>
            {/each}
        photos.
            {#each photos as {photoLink, photoSource}}
                <a href={photoLink} target="_blank" rel="noopener noreferrer">
                    <img src={photoSource} class="photos" alt="photos" />
                </a>
            {/each}
        prints. coming soon.
    </div>
</div>

<style>
	.container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        padding-top: 1.25rem;
        color: #ffffff;
    }
    .videos, .photos {
        border-color: #ffffff;
        border-style: solid;
        border-width: 0.15rem;
        width: 15rem;
        height: 15rem;
        object-fit: cover;
    }
    @media (max-width: 768px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        }
    }
</style>
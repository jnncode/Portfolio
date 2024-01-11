<script>
    import { assetsBasePath } from "$lib/path.js";

    const slides = [
        { id: 1, image: `${assetsBasePath}images/Spotify.png`, title: 'Mocked Spotify Web Player', caption: 'Scraped API and integrated OAuth regeneration.'},
        { id: 2, image: `${assetsBasePath}images/FittsLaw.png`, title: `Fitts' Law`, caption: 'Simulated time construction following heuristic evaluation practices.'},
    ]
    let index = 0;

    function next() {
        index = (index + 1) % slides.length;
    }
    function previous() {
        index = (index - 1 + slides.length) % slides.length;
    }

    const prints = [
        { link: `https://mega.nz/folder/dfNDRabR#_UzhseJShbbeTeXfSQsBFQ`, source: `${assetsBasePath}icons/Folder.svg`, caption: 'Studio Ghibli', extra: 'Tree' },
        { link: `https://mega.nz/folder/4C9DUTIY#czQ4_uWA4iT5sAQSdMKpRw`, source: `${assetsBasePath}icons/Folder.svg`, caption: 'Bonsai Tree', extra: '' },
        { link: `https://mega.nz/folder/cHVgHCRY#hYfzz2UxobfqUAz_CofFPA`, source: `${assetsBasePath}icons/Folder.svg`, caption: 'Cherry Blossom', extra: 'Tree' },
        { link: `https://mega.nz/folder/hfUgzSJT#_SIXHoXnaT2asS2vtHSw3g`, source: `${assetsBasePath}icons/Folder.svg`, caption: 'Lotus Flower', extra: '' },
    ];
</script>

<svelte:head>
	<title>Work</title>
	<meta name="description" content="JNNCODE Work" />
</svelte:head>

<div class="container">
    <h4>Codes</h4>
    <div class="slideshow">
        <img class="slide" src={slides[index].image} alt={[index]} />
        <div class="title">{slides[index].title}</div>
        <div class="caption">{slides[index].caption}</div>
        <button id="prev" on:click={previous}>&#10094;</button>
        <button id="next" on:click={next}>&#10095;</button>
    </div>
    <h4>Prints</h4>
    <div class="grid">
        {#each prints as {link, caption, extra}}
            <a href={link} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="125px" height="125px">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path d="M4,3c-1.105,0 -2,0.895 -2,2v3h11h15v-1c0,-1.105 -0.895,-2 -2,-2h-14.80078l-0.61719,-1.0293c-0.361,-0.602 -1.01184,-0.9707 -1.71484,-0.9707zM3,10c-0.552,0 -1,0.448 -1,1v12c0,1.105 0.895,2 2,2h22c1.105,0 2,-0.895 2,-2v-12c0,-0.552 -0.448,-1 -1,-1z"></path>
                        </g>
                    </g>
                    <text class="text" x="25" y="125" fill="#000000">{caption}
                        <tspan class="text" x="25" y="150">{extra}</tspan>
                    </text>
                </svg>
            </a>
        {/each}
    </div>
</div>

<style>
	.container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .slideshow {
        margin: 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    img {
        max-width: 100%;
        max-height: 100%;
        width: 45rem;
        height: 25rem;
        object-fit: contain;
    }
    .title, .caption {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #9e9e9e;
    }
    .title {
        bottom: 20%;
        font-weight: 900;
        white-space: nowrap;
    }
    .caption {
        bottom: 10%;
        font-weight: 400;
    }
    button {
        position: absolute;
        font-size: 2rem;
        width: 3rem;
        padding: 0.25rem;
        font-weight: 900;
        color: #ffffff;
        background-color: transparent;
        border: none;
    }
    button:hover {
        cursor: pointer;
        font-weight: 900;
        color: #bdbdbd;
    }
    #prev {
        left: 0;
    }

    #next {
        right: 0;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5rem;
    }
    .grid a {
        /* Same as icon dimensions */
        height: 125px;
        width: 125px;
        text-decoration: none;
    }
    .grid a:focus {
        outline: none;
    }
    .text {
        font-size: 26px;
    }
    @media (max-width: 768px) {
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        }
    }
</style>
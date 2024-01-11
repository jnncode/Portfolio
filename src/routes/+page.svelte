<script>
    const events = [
        { period: 'September 2023 - December 2023', title: 'Graphic Design Intern', description: 'Distinguished in refining visual identities to enhance audience engagement and maintain consistency across diverse subjects. Crafted visual elements following design principles to contribute to the desgin of an e-book. Integrated strategic business objectives alongside the author to ensure UX.'},
        { period: 'August 2023 - September 2023', title: 'Software Engineer Intern', description: 'Led design initiatives with business objectives and user needs to enhance user satisfaction. Conducted user research, usability testing, and data analysis, to optimize usability. Collaborated on integration of user-centric design principles throughout the development cycle.'},
        { period: 'March 2022 - April 2023', title: 'Software Engineer Intern', description: 'Developed and tested regression and automation suites for Thomson Reuters (TR), optimizing QA processes. Collaborated on optimizing architecture of TR’s web-based, ensuring scalability. Delivered production components, facilitating smooth deployment of key features.'},
        { period: 'August 2019 - December 2023', title: 'Bachelor of Science in Computer Information Technology', description: 'Attained a degree with a primary focus on Information Technology and Computer Science, complemented by a minor in Business Administration at Minnesota State University, Mankato.'},
    ]
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="JNNCODE" />
</svelte:head>

<div class="container">
    <ul class="timeline-list">
        <li class="timeline-item">
            {#each events as {period, title, description}}
                <h4 class="timeline-period">{period}</h4>
                <h3 class="timeline-title">{title}</h3>
                <p class="timeline-description">{description}</p>
            {/each}
        </li>
    </ul>
</div>

<style>
    .timeline-list {
        display: flex;
        position: relative;
        flex-direction: column;
        list-style-type: none;
    }
    .timeline-item {
        position: relative;
    }
    .timeline-period {
        color: #ffffff;
        text-decoration: underline;
    }
</style>

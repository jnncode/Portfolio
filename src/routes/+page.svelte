<script>
    import { assetsBasePath } from "../lib/path";
</script>

<svelte:head>
	<title>home.</title>
	<meta name="description" content="JNNCODE" />
</svelte:head>

<div class="container">
    <a href="{assetsBasePath}documents/JNguyen_Resume.pdf" class="pdf" target="_blank" rel="noopener noreferrer">J's Full Resume</a>
    <ul class="timeline-list">
        <li class="timeline-item">
            <h4 class="timeline-period">September 2023 - December 2023</h4>
            <h3 class="timeline-title">Graphic Design Intern</h3>
            <p class="timeline-description">
                Led design initiatives with business objectives and user needs to enhance user satisfaction. Conducted user research, usability testing, and data analysis, to optimize usability. 
                Collaborated on integration of user-centric design principles throughout the development cycle.
            </p>
        </li>
        <li class="timeline-item">
            <h4 class="timeline-period">August 2023 - September 2023</h4>
            <h3 class="timeline-title">Software Engineer Intern</h3>
            <p class="timeline-description">
                Led design initiatives with business objectives and user needs to enhance user satisfaction. Conducted user research, usability testing, and data analysis, to optimize usability. 
                Collaborated on integration of user-centric design principles throughout the development cycle.
            </p>
        </li>
        <li class="timeline-item">
            <h4 class="timeline-period">March 2022 - April 2023</h4>
            <h3 class="timeline-title">Software Engineer Intern</h3>
            <p class="timeline-description">
                Developed and tested regression and automation suites for Thomson Reuters (TR), optimizing QA processes. Collaborated on optimizing architecture of TR’s web-based, ensuring scalability. 
                Delivered production components, facilitating smooth deployment of key features.
            </p>
        </li>
        <li class="timeline-item">
            <h4 class="timeline-period">August 2019 - December 2023</h4>
            <h3 class="timeline-title">Bachelor of Science in Computer Information Technology</h3>
            <p class="timeline-description">
                Attained a degree with a primary focus on Information Technology and Computer Science, complemented by a minor in Business Administration at Minnesota State University, Mankato.
            </p>
        </li>
    </ul>
</div>

<style>
    .pdf {
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;
    }
    .pdf:hover {
        text-decoration: underline;
    }
    .pdf:visited {
        color: #ffffff;
    }
    .timeline-list {
        display: flex;
        position: relative;
        flex-direction: column;
        border-left: 0.1rem solid #ffffff;
        list-style-type: none;
    }
    .timeline-item {
        position: relative;
    }
    .timeline-period {
        border-color: #ffffff;
        border-style: solid;
        color: #ffffff;
        width: 18rem;
        text-align: center;
    }
</style>

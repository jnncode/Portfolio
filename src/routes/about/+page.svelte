<script>
    import { assetsBasePath } from "$lib/path.js";
</script>

<svelte:head>
	<title>about.</title>
	<meta name="description" content="About JNNCODE" />
</svelte:head>

<div class="container">
    <img src="{assetsBasePath}images/Avatar.png" class="avatar" alt="Avatar" />
    <div class="name-tag"><a href="{assetsBasePath}images/PFP.jpg" class="pfp" target="_blank" rel="noopener noreferrer"><h3>J Nguyen (they/them/theirs)</h3></a><h3>Business Inquiries<br />n.nguyenj.media@proton.me</h3></div>
    
    <h3 class="title">Origin</h3>
    <p>Yo, my name is J, or JNNCODE.<br />
        You may either be lost or you are intentionally browsing through my Portfolio. Whichever the answer may be, let us begin the story...
    </p>
    <p>
        My favorite number is "7". No, actually, it is 21, but "7" is a close runner up because "7" times "3" is 21. Have I lost you yet? Keep reading and you will understand. "7" is the age I am able remember most vividly as opposed
        to all the other years of my childhood. Why? Because that was the year I formed my number one aspiration: to become an engineer. One film was all I needed -- <i>Meet the Robinsons</i>. The film encapsulates everything
        I am continuously teaching myself. That is, no matter the failures, or no matter the circumstances, you keep moving forward. And from that point forward, I let my young mind travel. I journaled every piece of "invention" I could 
        have ever imagined, whether it was taking ordinary cardboard boxes and transforming them into arcade game machines, building vending machines from mismatched lego pieces and the power of my own imagination, and even collecting computer
        hardware components just to have them. The origin of who I am may be a bit unconventional, but I am here, and this portfolio is here, because of that 7 year old girl. Now where is the "3" in this equation you may ask? Well, "3"
        is the total number of words I primarily approach life: discipline, patience, and fortitude. With these "3" words, it emphasizes the "7"--the story of "7".
    </p>

    <h3 class="title">More</h3>
    <p>On my leisure time, you will find me glued onto my desk and am either studying, gaming, or programming. But outside of it all, I touch some grass and venture off with my camera and capture glimpses of life.</p>

    <h6>P.S. Hover over my name to reveal a link to view a real PFP.</h6>
    <div class="icons">
        <a href="https://github.com/jnncode" class="icon-link" target="_blank" rel="noopener noreferrer">
            <img src="{assetsBasePath}icons/GitHub.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/j-nguyen-145ba7222" class="icon-link" target="_blank" rel="noopener noreferrer">
            <img src="{assetsBasePath}icons/LinkedIn.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.twitch.tv/jnncode" class="icon-link" target="_blank" rel="noopener noreferrer">
            <img src="{assetsBasePath}icons/Twitch.svg" alt="Twitch" />
        </a>
    </div>
</div>

<style>
    .avatar {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 12rem;
        height: 12rem;
    }
    .name-tag {
        text-align: center;
    }
    .icons {
        text-align: center;
        width: 100%;
        bottom: 2rem;
    }
    .icon-link {
        text-decoration: none;
    }
    .pfp {
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;
    }
    .pfp:hover {
        text-decoration: underline;
    }
    .pfp:visited {
        color: #ffffff;
    }
</style>
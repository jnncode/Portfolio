<script>
    import { assetsBasePath } from "$lib/path.js";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About JNNCODE" />
</svelte:head>

<div class="container">
    <img src="{assetsBasePath}images/PFP.jpg" class="pfp" alt="jnncode PFP" />
    <h4 class="name-tag">J Nguyen (they/them/theirs)<br />n.nguyenj@proton.me</h4>
    <h4>Origin</h4>
    <p>Hello, jnncode here.</p>
    <p>
        My favorite number is "7" because it is the age I am able to remember most vividly as opposed to all the other years of my childhood. Why? Because that was the year I formed my number one aspiration: to become an engineer. One film 
        was all I needed -- <i>Meet the Robinsons</i>. The film encapsulates everything I am continuously teaching myself. That is, no matter the failures, or no matter the circumstances, you keep moving forward. And from that point forward, 
        I let my young mind travel. I journaled every piece of "invention" I could have ever imagined, whether it was taking ordinary cardboard boxes and transforming them into arcade game machines, building vending machines from mismatched 
        lego pieces and the power of my own imagination, and even collecting computer hardware components just to have them. The origin of who I am may be a bit unconventional, but I am here, and this portfolio is here, because of that 7 
        year old girl.
    </p>

    <h4>More</h4>
    <p>On my leisure time, you will find me glued onto my desk and am either studying the developments of science and technology, gaming, or programming. But outside of it all, I touch some grass and venture off with my <a href="https://vsco.co/jnncode/" target="_blank" rel="noopener noreferrer">camera</a> and capture glimpses of life.</p>
</div>

<style>
    .pfp {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 12rem;
        height: 12rem;
    }
    .name-tag {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        justify-content: center;
        color: #ffffff;
    }
    a {
        padding: 0.25rem 0.25rem;
        color: #ffffff;
        font-weight: 900;
    }
</style>
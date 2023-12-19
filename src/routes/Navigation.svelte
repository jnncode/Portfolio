<script>
    import { page } from "$app/stores";
    import { assetsBasePath } from "../lib/path";
    import { base } from "$app/paths";
</script>

<nav>
	<div class="container">
		<img src="{assetsBasePath}images/Logo.png" class="logo" alt="logo" />
		<div class="nav-links">
			<li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
				<a href="{base}/">home.</a>
			</li>
			<li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
				<a href="{base}/work">work.</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith("/sverdle") ? "page" : undefined}>
				<a href="{base}/about">about.</a>
			</li>
		</div>
	</div>
</nav>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }
    .nav-links {
        display: flex;
        gap: 1rem;
    }
	.nav-links li {
        list-style-type: none;
	}
    .nav-links a {
        text-decoration: none;
        padding: 0.25rem 0.75rem;
        color: #ffffff;
        font-weight: 900;
    }
    .nav-links a:hover {
        outline: 0.2rem solid #ffffff;
    }
    .nav-links a:focus {
        outline: none;
    }
    .logo {
        width: 5rem;
        height: 7rem;
    }
</style>

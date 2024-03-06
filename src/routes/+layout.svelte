<script>
    import './global.css';
</script>

<div class="header">
    <h1 class="title"><a href="/">Südstadt</a></h1>
    <nav>
        <ul>
            <li><a href="/history">Geschichte</a></li>
            <li><a href="/teams">Teams</a></li>
            <li><a href="/calender">Kalender</a></li>
            <li><a href="/rules">Regeln</a></li>
            <li><a href="/galery">Galerie</a></li>
            <li><a href="/contact">Kontakt</a></li>
        </ul>
    </nav>
</div>
<slot />

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: fixed; bottom: 0; z-index: -1;">
    <path fill="#e4d5b7" fill-opacity="1" d="M0,320L80,293.3C160,267,320,213,480,202.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>


<style>
    body {
        background-color: black;
        margin: 0;
    }

    .header {
        display: flex;
        justify-content: space-between; 
        align-items: center; 
        padding: 10px; 
    }

    .title:hover{
    	background-color: #F0F8FF;
    }

    .title {
        margin: 0; 
        font-size: 24px; 
        font-weight: bold; 
    }

    nav {
        background-color: #faf0e6; 
        padding: 10px; 
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: 1em;
        font-weight: bold;
    }

    a {
        color: black; 
        text-decoration: none; 
        padding: 5px 10px; 
        border-radius: 5px; 
    }

    a:hover {
        background-color: #FAF9F6; 
    }
</style>
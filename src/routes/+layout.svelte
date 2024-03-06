<nav>
	<ul>
		<li><a href ="/">Suedstadt</a></li>
		<li><a href ="/history">Geschichte</a></li>
		<li><a href ="/teams">Teams</a></li>
		<li><a href ="/calender">Kalender</a></li>
		<li><a href ="/rules">Regeln</a></li>
		<li><a href ="/galery">Galerie</a></li>
		<li><a href ="/contact">Kontakt</a></li>

	</ul>
</nav>


<slot />


<style>
ul{
	display:flex;
	list-style: none;
	margin: 0;
  	padding: 0;
}
li{
	margin-right: 1em;
	font-weight: bold;

}

li:hover{
	text-decoration: underline;
}
</style>
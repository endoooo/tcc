<a href="#" class="icon-menu" id="menu-link"></a>
<div id="overlay"></div>
<nav id="menu">
	<ul>
		<li <?= ($area == 'intro') ? 'class="active"' : '' ?>><a href="<?= $root ?>/">Introdução</a></li>
		<li <?= ($area == 'population') ? 'class="active"' : '' ?>><a href="#">Visão geral</a></li>
		<hr/>
		<p>Acesso à internet e:</p>
		<li <?= ($area == 'education') ? 'class="active"' : '' ?>><a href="<?= $root ?>/educacao">Educação</a></li>
		<li <?= ($area == 'incoming') ? 'class="active"' : '' ?>><a href="<?= $root ?>/renda">Renda</a></li>
		<li <?= ($area == 'region') ? 'class="active"' : '' ?>><a href="<?= $root ?>/regiao">Região</a></li>
		<li <?= ($area == 'gender') ? 'class="active"' : '' ?>><a href="#">Sexo/idade</a></li>
		<hr/>
		<p><span class="icon-info"></span> Info</p>
		<li <?= ($area == 'about') ? 'class="active"' : '' ?>><a href="#">Sobre o trabalho</a></li>
		<li <?= ($area == 'author') ? 'class="active"' : '' ?>><a href="#">Endoooo</a></li>
	</ul>
	<a href="#" class="icon-close" id="close-menu-link"></a>
</nav>
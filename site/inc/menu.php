<a href="#" class="icon-menu" id="menu-link"></a>
<div id="overlay"></div>
<div id="menu">
	<ul>
		<li <?= ($area == 'intro') ? 'class="active"' : '' ?>><a href="<?= $root ?>/">Introdução</a></li>
		<br/>
		<span class="icon-link"></span> Acesso a internet e:
		<li <?= ($area == 'population') ? 'class="active"' : '' ?>><a href="#">Crescimento populacional</a></li>
		<li <?= ($area == 'education') ? 'class="active"' : '' ?>><a href="<?= $root ?>/educacao">Educação</a></li>
		<li <?= ($area == 'incoming') ? 'class="active"' : '' ?>><a href="#">Renda</a></li>
		<li <?= ($area == 'location') ? 'class="active"' : '' ?>><a href="#">Localização</a></li>
		<li <?= ($area == 'gender') ? 'class="active"' : '' ?>><a href="#">Sexo/idade</a></li>
		<br/>
		<span class="icon-info"></span> Info
		<li <?= ($area == 'about') ? 'class="active"' : '' ?>><a href="#">Sobre o trabalho</a></li>
		<li <?= ($area == 'author') ? 'class="active"' : '' ?>><a href="#">Endoooo</a></li>
	</ul>
	<span class="arcs"></span>
	<a href="#" class="icon-close" id="close-menu-link"></a>
</div>
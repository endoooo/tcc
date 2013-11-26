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

<div id="note">
	<div class="header" id="handler">
		<h4 class="title"><span class="icon-note"></span> Notas</h4>
		<a href="#" class="close icon-close"></a>
		<a href="#" class="collapse icon-minus"></a>
		<div class="clear"></div>
	</div>
	<div class="content" id="note-content">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
</div>
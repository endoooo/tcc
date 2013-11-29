<a href="#" class="icon-menu" id="menu-link"></a>
<div id="overlay"></div>
<nav id="menu">
	<ul>
		<li <?= ($area == 'intro') ? 'class="active"' : '' ?>><a href="<?= $root ?>/">Introdução</a></li>
		<li <?= ($area == 'general') ? 'class="active"' : '' ?>><a href="<?= $root ?>/visao-geral/">Visão geral</a></li>
		<hr/>
		<p>Acesso à internet e:</p>
		<li <?= ($area == 'education') ? 'class="active"' : '' ?>><a href="<?= $root ?>/educacao/">Educação</a></li>
		<li <?= ($area == 'incoming') ? 'class="active"' : '' ?>><a href="<?= $root ?>/renda/">Renda</a></li>
		<li <?= ($area == 'region') ? 'class="active"' : '' ?>><a href="<?= $root ?>/regiao/">Região</a></li>
		<hr/>
		<p><span class="icon-info"></span> Info</p>
		<li <?= ($area == 'about') ? 'class="active"' : '' ?>><a href="<?= $root ?>/sobre/">Sobre o trabalho</a></li>
		<li <?= ($area == 'contact') ? 'class="active"' : '' ?>><a href="<?= $root ?>/contato/">Contato</a></li>
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
	<div class="content" id="note-content"></div>
</div>
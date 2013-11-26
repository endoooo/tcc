<?php
	$area = 'about';
	$title = 'Sobre o projeto | Visualizando o PNAD Internet 2011';
	$script = 'about.js';
	include '../inc/header.php';
?>

	<body>

	<div id="about" class="container">

		<div class="first content">
			<h1>Sobre o projeto</h1>
			<hr/>
			<p>Este projeto é parte do Trabalho de Conclusão de Curso de Eric Endo para o curso de design da FAU USP 2013.</p>
			<br/>
			<div class="profile">
				<img src="<?= $root ?>/img/endo.png" alt="Endo" />
				<p class="mini-title">Desenvolvido por:</p>
				<hr/>
				<p>Eric Hiroyuki Endo</p>
				<p><a href="http://behance.net/end" target="_blank"><span class="icon-link"></span> Behance</a></p>
				<div class="clear"></div>
			</div>
			<br/>
			<div class="profile">
				<img src="<?= $root ?>/img/dani.png" alt="Daniela" />
				<p class="mini-title">Orientação:</p>
				<hr/>
				<p>Daniela Kutschat Hanns</p>
				<p><a href="http://lattes.cnpq.br/7439277374201617" target="_blank"><span class="icon-link"></span> Currículo Lattes</a></p>
				<div class="clear"></div>
			</div>
		</div>

		<div class="content">
			<h1>Status</h1>
			<hr/>
			<p>Última atualização: 26/nov/2013</p>
			<p><a href="https://github.com/endoooo/tcc" target="_blank">Github</a></p>
			<br/>
			<p class="mini-title">Próximas etapas:</p>
			<ul class="to-do list">
				<li>Conversão dos gráficos de argola para d3.js</li>
				<li>Gerador de gráficos</li>
				<li>Visualizações de cruzamento de dados entre categorias diferentes</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</div> <!-- container -->

	</body>
</html>
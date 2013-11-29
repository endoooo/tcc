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
			<p>Este projeto é parte do Trabalho de Conclusão de Curso de Eric Endo para o curso de design da FAU USP 2013, intitulado "Design de visualização de dados: um modelo interativo sobre o uso da internet no Brasil com base na Pesquisa Nacional por Amostra Domiciliar (PNAD) do IBGE de 2011", sob orientação de Daniela Kutschat Hanns.</p>
			<br/>
			<div class="profile">
				<img src="<?= $root ?>/img/endo.png" alt="Endo" />
				<p>Desenvolvido por:</p>
				<p class="mini-title">Eric Hiroyuki Endo</p>
				<hr/>
				<p>Apesar da formação em design, sempre se interessou pela área de programação e encontrou na visualização de dados um meio de unir os dois interesses.</p>
				<br/>
				<p>Atualmente trabalha na Wefit como designer e arquiteto de informação com foco na experiência do usuário. Nas horas vagas, além das leituras de UX e metodologias de projeto necessárias para o seu dia-a-dia, tem estudado arte generativa e Processing.</p>
				<br/>
				<a href="http://behance.net/end" target="_blank"><span class="icon-link"></span> Behance</a>
			</div>
			<!--
			<div class="profile">
				<img src="<?= $root ?>/img/dani.png" alt="Daniela" />
				<p>Orientação:</p>
				<p class="mini-title">Daniela Kutschat Hanns</p>
				<hr/>
				<a href="http://lattes.cnpq.br/7439277374201617" target="_blank"><span class="icon-link"></span> Currículo Lattes</a>
			</div>
			-->
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
				<li>Inclusão dos dados sobre posse de telefone móvel para uso pessoal</li>
				<li>Versão mobile</li>
				<li>Inclusão de visualizações mais experimentais</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</div> <!-- container -->

	</body>
</html>
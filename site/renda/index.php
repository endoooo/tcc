<?php
	$area = 'incoming';
	$title = 'O acesso a internet e sua relação com a renda da população | Visualizando o PNAD Internet 2011';
	$script = 'incoming.js';
	include '../inc/header.php';
?>

	<body id="incoming">

		<div class="first content">
			<h1>A utilização da internet e a renda da população</h1>
			<hr/>
			<p>Qual a relação entre renda e internet?</p>
		</div>

		<div class="graph-container" id="inc-graph1">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="inc-settings1">
				<ul class="type-list">
					<span class="setting-title">Visualizar por:</span>
					<li class="active"><a href="#" class="graph-type" data-graph="graph1a">PIB do estado</a></li>
					<li><a href="#" class="graph-type" data-graph="graph1b">Renda per capita <span class="note-indicator">1</span></a></li>
				</ul>
				<br/>
				<ul class="value-list">
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
					<li><a href="#" class="graph-value" data-value="relative">relativos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre o ponto para ver os valores exatos.
				</p>
				<br/>
				<p class="info">
					<strong class="icon-info">Info</strong>
					<span class="num">1.</span> Média da renda mensal per capita da população do estado.
				</p>
			</div>
		</div>

		<br/>
		
		<div class="graph-container" id="inc-graph2">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="inc-settings2">
				<ul>
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
					<li><a href="#" class="graph-value" data-value="relative">relativos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre a barra para ver seu valor exato.
				</p>
				<br/>
				<p class="info">
					<strong class="icon-info">Info</strong>
					S.M. = salário mínimo
				</p>
			</div>
		</div>

		<div class="content">
			<p>Qual a relação entre ocupação e internet?</p>
		</div>

		<div class="graph-container" id="inc-graph3">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="inc-settings3">
				<ul class="type-list">
					<span class="setting-title">Visualizar por:</span>
					<li class="active"><a href="#" class="graph-type" data-graph="graph3a">grupamento ocupacional</a></li>
					<li><a href="#" class="graph-type" data-graph="graph3b">posição na ocupação</a></li>
					<li><a href="#" class="graph-type" data-graph="graph3c">setor</a></li>
				</ul>
				<br/>
				<ul class="value-list">
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
					<li><a href="#" class="graph-value" data-value="relative">relativos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre a barra para ver seu valor exato.
				</p>
			</div>
		</div>

		<div class="content">
			<h3>Links</h3>
			<p><a href="http://www.ibge.gov.br/home/estatistica/populacao/acessoainternet2011/default_xls_internet.shtm" target="_blank"><span class="icon-link"></span> Lista de tabelas PNAD 2011 - Acesso à Internet</a></p>
			<p>Tabelas utilizadas:</p>
			<ul>
				<li>1.4.1</li>
				<li>1.4.2</li>
				<li>1.5.1</li>
				<li>1.5.2</li>
				<li>1.5.3</li>
				<li>1.6.1</li>
				<li>1.6.2</li>
				<li>1.7.1</li>
				<li>1.7.2</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</body>

</html>
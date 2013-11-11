<?php
	$area = 'education';
	$title = 'A educação e o acesso a internet | Visualizando o PNAD Internet 2011';
	$script = 'education.js';
	include '../inc/header.php';
?>

	<body id="education">

		<div class="first content">
			<h1>Impacto da educação na utilização da internet</h1>
			<p>Qual a relação entre o fato da pessoa estar estudando, a quantidade de anos de estudo e o tipo de rede de ensino com o acesso à internet?</p>
		</div>

		<div class="graph-container" id="edu-graph1">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="edu-settings1">
				<ul class="type-list">
					<span class="setting-title">Visualizar por:</span>
					<li class="active"><a href="#" class="graph-type" data-graph="graph1a">condição de estudante</a></li>
					<li><a href="#" class="graph-type" data-graph="graph1b">anos de estudo</a></li>
					<li><a href="#" class="graph-type" data-graph="graph1c">rede de ensino</a></li>
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
					<span class="icon-info">Interação:</span>
					passe o mouse sobre os textos à esquerda do gráfico para ver os valores exatos das barras.
				</p>
			</div>
		</div>

		<div class="content">
			<p>Existe alguma relação entre a taxa de analfabetismo e o acesso à internet?</p>
		</div>

		<div class="graph-container" id="graph2">
			<h2 id="graph1-title"></h2>
			<div class="graph"></div>
			<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
			<a href="#" class="icon-cog settings-link" data-graph="graph2"></a>
			<div class="settings" id="graph2-settings">
				<ul>
					Valores:
					<li><label><input type="radio" name="student2type" value="absolute" checked /> absolutos (milhões)</label></li>
					<li><label><input type="radio" name="student2type" value="percentage" /> relativos (%)</label></li>
				</ul>
				<a href="#" class="icon-close close-settings-link"></a>
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
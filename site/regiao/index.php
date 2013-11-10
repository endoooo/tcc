<?php
	$area = 'region';
	$title = 'O acesso a internet por regiões | Visualizando o PNAD Internet 2011';
	$script = 'region.js';
	include '../inc/header.php';
?>

	<body id="region">

		<div class="first content">
			<h1>A utilização da internet pelos Estados e regiões brasileiros</h1>
			<p>Existe muita diferença de acesso à internet entre os Estados e regiões do Brasil?</p>
		</div>

		<div class="graph-container" id="reg-graph1">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="reg-settings1">
				<ul class="value-list">
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
					<li><a href="#" class="graph-value" data-value="relative">relativos</a></li>
				</ul>
				<br/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
			</div>
		</div>

		<div class="content">
			<p>Lorem ipsum</p>
		</div>

		<div class="graph-container" id="reg-graph2">
			<h2 class="title">Mapa da utilização da internet no Brasil (2011)</h2>
			<div class="graph">
				<img src="<?= $root ?>/img/choropleth-abs.png" alt="utilização da internet - valores absolutos" id="map-abs" class="choropleth-map" />
				<img src="<?= $root ?>/img/choropleth-rel.png" alt="utilização da internet - valores relativos" id="map-rel" class="choropleth-map" />
			</div>
			<div class="settings" id="reg-settings2">
				<ul>
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-map="map-abs">absolutos</a></li>
					<li><a href="#" class="graph-value" data-map="map-rel">relativos</a></li>
				</ul>
				<br/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
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
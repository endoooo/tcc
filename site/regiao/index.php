<?php
	$area = 'region';
	$title = 'O acesso a internet por regiões | Visualizando o PNAD Internet 2011';
	$script = 'region.js';
	include '../inc/header.php';
?>

	<body id="region">

		<div class="first content">
			<h1>A utilização da internet pelos estados e regiões brasileiros</h1>
			<p>Existe muita diferença de acesso à internet entre os estados e regiões do Brasil?</p>
		</div>

		<div class="graph-container" id="reg-graph1">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="reg-settings1">
				<ul class="type-list">
					<span class="setting-title">Visualizar por:</span>
					<li class="active"><a href="#" class="graph-type" data-graph="graph1a">estados</a></li>
					<li><a href="#" class="graph-type" data-graph="graph1b">regiões</a></li>
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
					passe o mouse sobre os nomes dos estados/regiões para ver os valores exatos das barras.
				</p>
			</div>
		</div>

		<br/>

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
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="annotation icon-pencil">Notas</a>
			</div>
		</div>

		<div class="content">
			<p>Qual a relação dos dados de acesso à internet dos estados como um todo e somente de suas regiões metropolitanas?</p>
		</div>

		<div class="graph-container" id="reg-graph3">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="reg-settings3">
				<ul class="value-list">
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
					<li><a href="#" class="graph-value" data-value="relative">relativos</a></li>
				</ul>
				<br/>
				<ul class="cat-list">
					<span class="setting-title">Detalhar:</span>
					<li class="active"><a href="#" class="graph-cat" data-detail="none" data-connection="0">nenhum</a></li>
				</ul>
				<hr/>
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
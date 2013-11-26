<?php
	$area = 'region';
	$title = 'O acesso a internet por regiões | Visualizando o PNAD Internet 2011';
	$script = 'region.js';
	include '../inc/header.php';
?>

	<body>
	
	<div class="container" id="region">

		<div class="first content">
			<h1>A utilização da internet pelos estados e regiões brasileiros</h1>
			<hr/>
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
					<li class="active"><a href="#" class="graph-value" data-value="relative">relativos</a></li>
					<li><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="has-note icon-note">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre a barra para ver seu valor exato.
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
					<li class="active"><a href="#" class="graph-value" data-map="map-rel">relativos</a></li>
					<li><a href="#" class="graph-value" data-map="map-abs">absolutos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="has-note icon-note">Notas</a>
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
					<li class="active"><a href="#" class="graph-value" data-value="relative">relativos</a></li>
					<li><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
				</ul>
				<br/>
				<ul class="cat-list">
					<span class="setting-title">Detalhar:</span>
					<li class="active"><a href="#" class="graph-cat" data-detail="none" data-connection="0">nenhum</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="has-note icon-note">Notas</a>
			</div>
		</div>

		<div class="content link-list">
			<h3><span class="icon-link"></span> Referências</h3>
			<ul>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/acessoainternet2011/default_xls_internet.shtm" target="_blank">Lista de tabelas PNAD 2011 - Acesso à Internet</a></li>
			</ul>
			<br/>
			<h3><span class="icon-file-excel"></span> Tabelas utilizadas</h3>
			<ul>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1021.zip" target="_blank">1.2.1</a>
					Pessoas de 10 anos ou mais de idade que utilizaram a Internet, no período de referência dos últimos três meses, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1023.zip" target="_blank">1.2.3</a>
					Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1161.zip" target="_blank">1.16.1</a>
					Pessoas de 10 anos ou mais de idade, por condição de estudante e utilização da Internet, no período de referência dos últimos três meses, segundo as Unidades da Federação e as Regiões Metropolitanas - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1162.zip" target="_blank">1.16.2</a>
					Distribuição das pessoas de 10 anos ou mais de idade, por condição de estudante e utilização da Internet, no período de referência dos últimos três meses, segundo as Unidades da Federação e as Regiões Metropolitanas - 2005/2011
				</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</div><!-- container -->

	</body>

</html>
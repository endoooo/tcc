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
			<p>O acesso à internet varia de acordo com o local onde a pessoa mora? A diferença de acesso entre os estados é muito grande?</p>
			<p>Responder a estas perguntas e entender a relação entre localização e o acesso à internet é de grande importância na definição de estratégias de políticas de inclusão digital. O Ministério das Comunicações, por exemplo, tem uma <a href="http://www.mc.gov.br/inclusao-digital/acoes-e-programas" target="_blank">série de programas de inclusão digital</a>, dentre os quais o <a href="http://www.mc.gov.br/acoes-e-programas/programa-nacional-de-banda-larga-pnbl" target="_blank">Programa Nacional de Banda Larga</a> que tem como objetivo levar infraestrutura e acesso banda larga a 40 milhões de domicílios brasileiros.</p>
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
				<a href="<?= $root ?>/regiao/notas.html" class="has-note icon-note" data-target="#reg-note-graph1">Notas</a>
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
				<img src="<?= $root ?>/img/choropleth-rel.svg" alt="utilização da internet - valores relativos" id="map-rel" class="choropleth-map" />
				<img src="<?= $root ?>/img/choropleth-abs.svg" alt="utilização da internet - valores absolutos" id="map-abs" class="choropleth-map" />
			</div>
			<div class="settings" id="reg-settings2">
				<ul>
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-map="map-rel">relativos</a></li>
					<li><a href="#" class="graph-value" data-map="map-abs">absolutos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/regiao/notas.html" class="has-note icon-note" data-target="#reg-note-graph2">Notas</a>
			</div>
		</div>

		<div class="content">
			<p>Além das diferenças de acesso entre os estados, a pesquisa possui dados que permite visualizar a diferença de acesso dos estados como um todo e somente de suas regiões metropolitanas.</p>
			<p>O fato de haver uma maior concentração de pessoas, economia mais dinâmica entre outras características que configuram uma região metropolitana favorecem ou não o acesso à internet?</p>
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
				<a href="<?= $root ?>/regiao/notas.html" class="has-note icon-note" data-target="#reg-note-graph3">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-info">Info</strong>
					O PNAD não contemplou todos os estados neste levantamento.
				</p>
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
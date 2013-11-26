<?php
	$area = 'incoming';
	$title = 'O acesso a internet e sua relação com a renda da população | Visualizando o PNAD Internet 2011';
	$script = 'incoming.js';
	include '../inc/header.php';
?>

	<body>
	
	<div class="container" id="incoming">

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
					<li class="active"><a href="#" class="graph-type" data-graph="graph1a">Renda per capita <span class="note-indicator">1</span></a></li>
					<li><a href="#" class="graph-type" data-graph="graph1b">PIB do estado</a></li>
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
					Passe o mouse sobre o ponto para ver os valores exatos e a sigla do estado.
				</p>
				<br/>
				<p class="info">
					<strong class="icon-info">Info</strong>
					<span class="num">1.</span> Renda média domiciliar per capita do estado.
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
					<li class="active"><a href="#" class="graph-value" data-value="relative">relativos</a></li>
					<li><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="has-note icon-note">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre a barra para ver seu valor exato, e sobre os textos abreviados para ver o texto completo.
				</p>
			</div>
		</div>

		<div class="content">
			<p>Quem tem acesso a internet em casa?</p>
		</div>

		<div class="graph-container" id="inc-graph4">
			<h2 class="title">Pessoas que residem em domicílio com computador e acesso à internet, e sua utilização (2011)</h2>
			<div class="graph">
				<img src="<?= $root ?>/img/inc4a.svg" alt="Residência com computador e acesso à internet e sua utilização (2011)" />
			</div>
			<p class="obs">Valores em milhões de pessoas</p>
			<div class="settings" id="inc-settings4">
				<a href="<?= $root ?>/educacao/estudo-vs-internet/" class="has-note icon-note">Notas</a>
			</div>
		</div>

		<div class="content link-list">
			<h3><span class="icon-link"></span> Referências</h3>
			<ul>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/acessoainternet2011/default_xls_internet.shtm" target="_blank">Lista de tabelas PNAD 2011 - Acesso à Internet</a></li>
				<li><a href="http://www.ibge.gov.br/home/estatistica/economia/contasregionais/2010/default_xls_2002_2010_zip.shtm" target="_blank">Lista de tabelas do Contas Regionais do Brasil 2010</a></li>
				<li><a href="http://tabnet.datasus.gov.br/cgi/idb2011/matriz.htm" target="_blank">Indicadores e Dados Básicos Brasil (IDB) 2011</a></li>
			</ul>
			<br/>
			<h3><span class="icon-file-excel"></span> Tabelas utilizadas</h3>
			<ul>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Contas_Regionais/2010/xls/tab01_2002_2010_xls.zip" target="_blank">Tabela 01 (Contas Regionais)</a>
					Produto Interno Bruto das Grandes Regiões e Unidades da Federação - 2002-2010
				</li>
				<li>
					<a href="http://tabnet.datasus.gov.br/cgi/tabcgi.exe?idb2011/b08a.def" target="_blank">B.8 (IDB)</a>
					Renda média domiciliar per capita
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1111.zip" target="_blank">1.11.1</a>
					Pessoas de 10 anos ou mais de idade, ocupadas na semana de referência, total e que utilizaram a Internet no período de referência dos últimos três meses, por Grandes Regiões, segundo os grupamentos ocupacionais no trabalho principal - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1113.zip" target="_blank">1.11.3</a>
					Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, ocupada na semana de referência, por Grandes Regiões, segundo os grupamentos ocupacionais no trabalho principal - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1121.zip" target="_blank">1.12.1</a>
					Pessoas de 10 anos ou mais de idade, ocupadas na semana de referência, total e que utilizaram a Internet no período de referência dos últimos três meses, por Grandes Regiões, segundo os grupamentos de atividade do trabalho principal - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1123.zip" target="_blank">1.12.3</a>
					Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, ocupada na semana de referência, por Grandes Regiões, segundo os grupamentos de atividade do trabalho principal - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1131.zip" target="_blank">1.13.1</a>
					Pessoas de 10 anos ou mais de idade, ocupadas na semana de referência, total e que utilizaram a Internet no período de referência dos últimos três meses, por Grandes Regiões, segundo a posição na ocupação e a categoria do emprego no trabalho principal - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1133.zip" target="_blank">1.13.3</a>
					Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, ocupada na semana de referência, por Grandes Regiões, segundo a posição na ocupação e a categoria do emprego no trabalho principal - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1141.zip" target="_blank">1.14.1</a>
					Pessoas de 10 anos ou mais de idade, por Grandes Regiões, segundo a utilização da Internet, no período de referência dos últimos três meses, e as classes de rendimento mensal domiciliar per capita - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1143.zip" target="_blank">1.14.3</a>
					Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, por Grandes Regiões, segundo as classes de rendimento mensal domiciliar per capita - 2005/2011
				</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</div><!-- container -->

	</body>

</html>
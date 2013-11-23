<?php
	$area = 'education';
	$title = 'A educação e o acesso a internet | Visualizando o PNAD Internet 2011';
	$script = 'education.js';
	include '../inc/header.php';
?>

	<body id="education">

		<div class="first content">
			<h1>Impacto da educação na utilização da internet</h1>
			<hr />
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
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre a barra para ver seu valor exato.
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

		<div class="content link-list">
			<h3><span class="icon-link"></span> Referências</h3>
			<ul>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/acessoainternet2011/default_xls_internet.shtm" target="_blank">Lista de tabelas PNAD 2011 - Acesso à Internet</a></p></li>
			</ul>
			<br/>
			<h3><span class="icon-file-excel"></span> Tabelas utilizadas</h3>
			<ul>
				<li>
					<a href="#">1.2.1</a> Pessoas de 10 anos ou mais de idade que utilizaram a Internet, no período de referência dos últimos três meses, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="#">1.2.3</a> Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="#">1.16.1</a> Pessoas de 10 anos ou mais de idade, por condição de estudante e utilização da Internet, no período de referência dos últimos três meses, segundo as Unidades da Federação e as Regiões Metropolitanas - 2005/2011
				</li>
				<li>
					<a href="#">1.16.2</a> Distribuição das pessoas de 10 anos ou mais de idade, por condição de estudante e utilização da Internet, no período de referência dos últimos três meses, segundo as Unidades da Federação e as Regiões Metropolitanas - 2005/2011
				</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</body>

</html>
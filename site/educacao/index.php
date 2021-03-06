<?php
	$area = 'education';
	$title = 'A educação e o acesso a internet | Visualizando o PNAD Internet 2011';
	$script = 'education.js';
	include '../inc/header.php';
?>
	
	<body>
	
	<div class="container" id="education">

		<div class="first content">
			<h1>Impacto da educação na utilização da internet</h1>
			<hr />
			<p>No ano em que diversos estados americanos <a href="http://www.cartacapital.com.br/sociedade/novos-tempo" target="_blank">aboliram a escrita à mão nas escolas</a>, recomendando dar ênfase à digitação ao invés da letra cursiva, é inevitável questionar a relação entre a educação e a utilização do computador, ou mais precisamente, da internet.</p>
			<p>Quem estuda acessa mais a internet do que aqueles que não estudam? A quantidade de anos de estudo faz alguma diferença?</p>
			<br/>
			<p>Os gráficos abaixo foram desenvolvidos buscando mostrar essa relação educação/internet no Brasil de alguns pontos de vista diferentes.</p>
		</div>

		<div class="graph-container" id="edu-graph1">
			<h2 class="title">Acesso a internet por condição de estudante (2011)</h2>
			<div class="graph">
				<img src="<?= $root ?>/img/edu1a.svg" alt="Acesso a internet por condição de estudante (2011)" id="edu-1a" />
				<img src="<?= $root ?>/img/edu1a-piece.svg" alt="Acesso a internet por condição de estudante (2011)" id="edu-1a-piece" />
				<img src="<?= $root ?>/img/edu1b.svg" alt="Acesso a internet por rede de ensino (2011)" id="edu-1b" />
			</div>
			<p class="obs">Valores em milhões de pessoas</p>
			<div class="settings" id="edu-settings1">
				<ul>
					<span class="setting-title">Visualizar por:</span>
					<li class="active"><a href="#" class="graph-type" data-graph="edu-1a">condição de estudante</a></li>
					<li><a href="#" class="graph-type" data-graph="edu-1b">rede de ensino</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/notas.html" class="has-note icon-note" data-target="#edu-note-graph1">Notas</a>
			</div>
		</div>

		<br/>

		<div class="graph-container" id="edu-graph2">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<div class="settings" id="edu-settings2">
				<ul class="value-list">
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="relative">relativos</a></li>
					<li><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/notas.html" class="has-note icon-note" data-target="#edu-note-graph2">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre a barra para ver seu valor exato.
				</p>
			</div>
		</div>

		<div class="content">
			<p>Será que existe alguma relação entre as taxas de acesso à internet com as taxas de analfabetismo? O aumento no acesso a internet nestes últimos anos colaborou com a diminuição do analfabetismo, ou não houve diferença?</p>
		</div>

		<div class="graph-container" id="edu-graph3">
			<h2 id="graph3-title">Taxas de acesso à internet e analfabetismo (2005 - 2011)</h2>
			<div class="graph"></div>
			<div class="settings" id="edu-settings3">
				<ul class="type-list">
					<span class="setting-title">Região:</span>
					<li class="active"><a href="#" class="graph-type" data-region="Brasil">Brasil</a></li>
					<li><a href="#" class="graph-type" data-region="Norte">Norte</a></li>
					<li><a href="#" class="graph-type" data-region="Nordeste">Nordeste</a></li>
					<li><a href="#" class="graph-type" data-region="Sudeste">Sudeste</a></li>
					<li><a href="#" class="graph-type" data-region="Sul">Sul</a></li>
					<li><a href="#" class="graph-type" data-region="Centro-Oeste">Centro-Oeste</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/educacao/notas.html" class="has-note icon-note" data-target="#edu-note-graph3">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre o ponto para ver seu valor exato.
				</p>
			</div>
		</div>

		<div class="content link-list">
			<h3><span class="icon-link"></span> Referências</h3>
			<ul>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/acessoainternet2011/default_xls_internet.shtm" target="_blank">Lista de tabelas PNAD 2011 - Acesso à Internet</a></li>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/trabalhoerendimento/pnad2011/brasil_defaultxls_brasil.shtm" target="_blank">Lista de tabelas - indicadores PNAD 2011</a></li>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/trabalhoerendimento/pnad2009/sintese_defaultzip_indicadores.shtm" target="_blank">Lista de tabelas - indicadores PNAD 2009</a></li>
				<li><a href="http://www.ibge.gov.br/home/estatistica/populacao/trabalhoerendimento/pnad2005/defaulttab_hist.shtm" target="_blank">Lista de tabelas - indicadores PNAD 2005</a></li>
			</ul>
			<br/>
			<h3><span class="icon-file-excel"></span> Tabelas utilizadas</h3>
			<ul>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1071.zip" target="_blank">1.7.1</a>
					Pessoas de 10 anos ou mais de idade, por Grandes Regiões e sexo, segundo a condição de estudante, rede de ensino e a utilização da Internet, no período de referência dos últimos três meses - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1072.zip" target="_blank">1.7.2</a>
					Distribuição das pessoas de 10 anos ou mais de idade, por Grandes Regiões e sexo, segundo a condição de estudante e a utilização da Internet, no período de referência dos últimos três meses - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1051.zip" target="_blank">1.5.1</a>
					Pessoas de 10 anos ou mais de idade que utilizaram a Internet, no período de referência dos últimos três meses, por Grandes Regiões, segundo o sexo e os grupos de anos de estudo - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1053.zip" target="_blank">1.5.3</a>
					Percentual das pessoas que utilizaram a Internet, no período de referência dos últimos três meses, na população de 10 anos ou mais de idade, por Grandes Regiões, segundo o sexo e os grupos de anos de estudo - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1171.zip" target="_blank">1.17.1</a>
					Estudantes de 10 anos ou mais de idade, por rede de ensino e utilização da Internet, no período de referência dos últimos três meses, segundo as Unidades da Federação e as Regiões Metropolitanas - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1172.zip" target="_blank">1.17.2</a>
					Distribuição dos estudantes de 10 anos ou mais de idade, por rede de ensino e utilização da Internet, no período de referência dos últimos três meses, segundo as Unidades da Federação e as Regiões Metropolitanas - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2011/Volume_Brasil/Brasil/brasil_tc_brasil_instrucao_xls.zip" target="_blank">Tabela 3.1 (PNAD 2011)</a>
					Pessoas de 5 anos ou mais de idade, por situação do domicílio e sexo, segundo a alfabetização e os grupos de idade - Brasil - 2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2011/Volume_Brasil/Grandes_Regioes/brasil_tc_gr_norte_xls.zip" target="_blank">Tabela 3.1 (PNAD 2011)</a>
					Pessoas de 5 anos ou mais de idade, por situação do domicílio e sexo, segundo a alfabetização e os grupos de idade - Norte - 2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2011/Volume_Brasil/Grandes_Regioes/brasil_tc_gr_nordeste_xls.zip" target="_blank">Tabela 3.1 (PNAD 2011)</a>
					Pessoas de 5 anos ou mais de idade, por situação do domicílio e sexo, segundo a alfabetização e os grupos de idade - Nordeste - 2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2011/Volume_Brasil/Grandes_Regioes/brasil_tc_gr_sudeste_xls.zip" target="_blank">Tabela 3.1 (PNAD 2011)</a>
					Pessoas de 5 anos ou mais de idade, por situação do domicílio e sexo, segundo a alfabetização e os grupos de idade - Sudeste - 2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2011/Volume_Brasil/Grandes_Regioes/brasil_tc_gr_sul_xls.zip" target="_blank">Tabela 3.1 (PNAD 2011)</a>
					Pessoas de 5 anos ou mais de idade, por situação do domicílio e sexo, segundo a alfabetização e os grupos de idade - Sul - 2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2011/Volume_Brasil/Grandes_Regioes/brasil_tc_gr_coeste_xls.zip" target="_blank">Tabela 3.1 (PNAD 2011)</a>
					Pessoas de 5 anos ou mais de idade, por situação do domicílio e sexo, segundo a alfabetização e os grupos de idade - Centro-Oeste - 2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2009/Sintese_Indicadores/Indicadores/sintese_ind_educacao.zip" target="_blank">Tabela 3.1 (PNAD 2009)</a>
					Pessoas de 10 anos ou mais de idade, total e analfabetas, por Grandes Regiões, segundo os grupos de idade e o sexo - 2008-2009
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Trabalho_e_Rendimento/Pesquisa_Nacional_por_Amostra_de_Domicilios_anual/2005/Sintese_Indicadores/2004_2005/Educacao/Educacao.zip" target="_blank">Tabela 3.1 (PNAD 2005)</a>
					Pessoas de 10 anos ou mais de idade, total e analfabetas, por Grandes Regiões, por segundo os grupos de idade e o sexo - 2004-2005
				</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</div><!-- container -->

	</body>

</html>
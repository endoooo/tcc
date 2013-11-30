<?php
	$area = 'general';
	$title = 'Visão geral sobre o acesso à internet no Brasil | Visualizando o PNAD Internet 2011';
	$script = 'general.js';
	include '../inc/header.php';
?>
	
	<body>
	
	<div class="container" id="education">

		<div class="first content">
			<h1>O cenário da utilização da internet no Brasil</h1>
			<hr />
			<p>Crescimento populacional vs. utilização da internet.</p>
		</div>

		<div class="graph-container" id="gen-graph1">
			<h2 id="graph1-title">Evolução da população e de usuários de internet (2005 - 2011)</h2>
			<div class="graph"></div>
			<div class="settings" id="gen-settings1">
				<ul class="type-list">
					<span class="setting-title">Região:</span>
					<li class="active"><a href="#" class="graph-type" data-region="Brasil">Brasil</a></li>
					<li><a href="#" class="graph-type" data-region="Norte">Norte</a></li>
					<li><a href="#" class="graph-type" data-region="Nordeste">Nordeste</a></li>
					<li><a href="#" class="graph-type" data-region="Sudeste">Sudeste</a></li>
					<li><a href="#" class="graph-type" data-region="Sul">Sul</a></li>
					<li><a href="#" class="graph-type" data-region="Centro-Oeste">Centro-Oeste</a></li>
				</ul>
				<br/>
				<ul class="value-list">
					<span class="setting-title">Valores:</span>
					<li class="active"><a href="#" class="graph-value" data-value="absolute">absolutos</a></li>
					<li><a href="#" class="graph-value" data-value="growing">cresicmento em relação à 2005</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/visao-geral/notas.html" class="has-note icon-note" data-target="#gen-note-graph1">Notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Passe o mouse sobre o ponto para ver seu valor exato.
				</p>
			</div>
		</div>

		<br/>

		<div class="graph-container" id="gen-graph2">
			<h2 id="graph2-title">Perfil do usuário da internet no Brasil</h2>
			<div class="graph">
				<div class="roulette">
					<img src="<?= $root ?>/img/gen2.svg" alt="utilização da internet - perfil" class="graph" />
					<img src="<?= $root ?>/img/gen2-txt.svg" alt="utilização da internet - perfil" class="txt" />
				</div>
				<div class="vis edu">
					<h3><span class="icon-book"></span> Anos de estudo dos usuários da internet</h3>
					<img src="<?= $root ?>/img/gen2a.svg" alt="utilização da internet por anos de estudo" />
				</div>
				<div class="vis inc">
					<h3><span class="icon-coin"></span> Renda mensal (em salários mínimos) dos usuários da internet</h3>
					<img src="<?= $root ?>/img/gen2b.svg" alt="utilização da internet por renda" />
				</div>
				<div class="vis reg">
					<h3><span class="icon-location"></span> Região de residência dos usuários da internet</h3>
					<img src="<?= $root ?>/img/gen2c.svg" alt="utilização da internet por região" />
				</div>
				<div class="vis age">
					<h3><span class="icon-book"></span> Idade dos usuários da internet</h3>
					<img src="<?= $root ?>/img/gen2d.svg" alt="utilização da internet por idade" />
				</div>
				<div class="vis gen">
					<h3><span class="icon-users2"></span> Sexo dos usuário da internet</h3>
					<img src="<?= $root ?>/img/gen2e.svg" alt="utilização da internet por sexo" />
				</div>
				<div class="clear"></div>
			</div>
			<div class="settings" id="gen-settings2">
				<ul class="type-list">
					<span class="setting-title">Visualizar:</span>
					<li class="active"><a href="#" class="graph-type" data-view="edu">Educação</a></li>
					<li><a href="#" class="graph-type" data-view="inc">Renda</a></li>
					<li><a href="#" class="graph-type" data-view="reg">Região</a></li>
					<li><a href="#" class="graph-type" data-view="age">Idade</a></li>
					<li><a href="#" class="graph-type" data-view="gen">Sexo</a></li>
				</ul>
				<hr/>
				<a href="<?= $root ?>/visao-geral/notas.html" class="has-note icon-note" data-target="#gen-note-graph2">Notas</a>
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
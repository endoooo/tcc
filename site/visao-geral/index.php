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
			<p>Realizada desde 1967, a PNAD traz informações sobre população, migração, educação, trabalho, rendimento e domicílios para Brasil, grandes regiões, estados e regiões metropolitanas. Desde 2005 a pesquisa conta com uma investigação de um tema suplementar que é o acesso à internet e a posse de telefone móvel celular para uso pessoal.</p>
			<br/>
			<p>A importância de se investigar este novo tema é indiscutivelmente importante. O acesso à internet tem um impacto  visível sobre a educação, trabalho e rendimento (todos estes temas centrais do PNAD), ou seja, na sociedade como um todo. E sua utilização só vem aumentando, como pode ser visto no gráfico abaixo:</p>
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

		<div class="content">
			<p>Entender o perfil do usuário da internet é fundamental para o planejamento nacional e as políticas públicas voltadas para o desenvolvimento tecnológico do país. Abaixo você pode ter uma visão geral e bastante resumida de quem é este usuário.</p>
			<br/>
			Depois não deixe de explorar o site, onde você poderá encontrar de forma mais detalhada dados que mostram a relação entre a internet e o nível de educação, faixa de renda e localização do usuário.
		</div>

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
					<h3><span class="icon-users2"></span> Idade dos usuários da internet</h3>
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
			</ul>
			<br/>
			<h3><span class="icon-file-excel"></span> Tabelas utilizadas</h3>
			<ul>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1011.zip" target="_blank">1.1.1</a>
					Pessoas de 10 anos ou mais de idade, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1021.zip" target="_blank">1.2.1</a>
					Pessoas de 10 anos ou mais de idade que utilizaram a Internet, no período de referência dos últimos três meses, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1022.zip" target="_blank">1.2.2</a>
					Distribuição das pessoas de 10 anos ou mais de idade que utilizaram a Internet, no período de referência dos últimos três meses, por Grandes Regiões, segundo o sexo e os grupos de idade - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1052.zip" target="_blank">1.5.2</a>
					Distribuição das pessoas de 10 anos ou mais de idade que utilizaram a Internet, no período de referência dos últimos três meses, por Grandes Regiões, segundo o sexo e os grupos de anos de estudo - 2005/2011
				</li>
				<li>
					<a href="ftp://ftp.ibge.gov.br/Acesso_a_internet_e_posse_celular/2011/tabelas_xls/tab1142.zip" target="_blank">1.14.2</a>
					Distribuição das pessoas de 10 anos ou mais de idade, por Grandes Regiões, segundo a utilização da Internet, no período de referência dos últimos três meses, e as classes de rendimento mensal domiciliar per capita - 2005/2011
				</li>
			</ul>
		</div>

		<?php include '../inc/menu.php'; ?>

	</div><!-- container -->

	</body>

</html>
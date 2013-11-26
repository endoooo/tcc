<?php
	$area = 'intro';
	$title = 'Introdução | Visualizando o PNAD Internet 2011';
	$script = 'intro.js';
	include 'inc/header.php';
?>

	<body>

		<div id="cover" class="content">
			<h1>Visualizando dados da utilização da internet no Brasil</h1>
			<hr/>
			<p>Um ponto de vista diferente da publicação “Acesso à Internet e posse de telefone móvel celular para uso pessoal 2011”, publicado pelo IBGE.</p>
			<a href="#" class="icon-arrow-down2" id="start"></a>
		</div>

	<div id="intro" class="container">

		<div class="first content">
			<h2>Por que visualizar?</h2>
			<hr/>
			<p>A visualização de dados é uma disciplina que tem como um de seus principais objetivos transformar grandes quantidades de dados em informação.</p>
			<br/>
			<p>Através da utilização adequada de diversos recursos organizacionais, visuais e interativos, é possível tornar um conjunto de dados como, por exemplo, os dados disponíveis nos diversos relatórios do IBGE, muito mais amigáveis e compreensíveis do que as dezenas de tabelas das publicações originais (que não deixam de ser uma forma de visualição de dados).</p>
			<br/>
			<p>O objetivo principal do projeto é incentivar o interesse da população pelos dados públicos. O acesso à informação é um direito previsto pela Declaração Universal dos Direitos Humanos e, no Brasil, também pela Constituição Federal. Acreditando que este direito é um dos bens mais valiosos do cidadão (ainda mais em tempos de desconfiança como o que vivemos hoje), mas que não é devidamente explorado, que surge este projeto de visualização de dados públicos, que dá seu primeiro passo trabalhando com dados sobre a utilização da internet no Brasil do PNAD 2011.</p>
		</div>

		<div class="content">
			<h2>Como utilizar?</h2>
			<hr/>
			<p>São 3 as principais ferramentas de navegação/interação deste site:</p>
			<br/>
			<p class="mini-title"><span class="num">1.</span> <span class="icon-menu"></span> Menu</p>
			<p>Localizado no canto superior esquerdo da tela, consiste na principal ferramenta de navegação entre as páginas do site. Clicando nele você poderá escolher para onde deseja ir.</p>
			<br/>
			<p class="mini-title"><span class="num">2.</span> Gráficos</p>
			<p>Os gráficos são acompanhados de uma área de controle/suporte a sua direita, onde você poderá escolher algumas opções de visualização, ver <span class="icon-point-up"></span> instruções de interação, <span class="icon-info"></span> informações adicionais e acessar as <span class="icon-note"></span> notas da visualização.</p>
		</div>
		<div class="graph-container" id="intro-graph">
			<h3 class="title">Descrição do gráfico</h3>
			<div class="graph">
				<img src="<?= $root ?>/img/intro-graph.svg" alt="Gráfico exemplo" />
			</div>
			<div class="settings" id="inc-settings1">
				<a href="#" class="has-note icon-note" data-target="null">Sem notas</a>
				<br/><br/>
				<p class="info">
					<strong class="icon-point-up">Interação</strong>
					Este gráfico não possui nenhuma interação.
				</p>
				<br/>
				<p class="info">
					<strong class="icon-info">Info</strong>
					E também não possui nenhuma informação adicional.
				</p>
			</div>
		</div>
		<div class="content">
			<p class="mini-title"><span class="num">3.</span> Notas</p>
			<p>Ao clicar nas notas de uma visualização, surgirá um painel flutuante com algumas observações, conclusões e novos questionamentos em relação ao gráfico apresentado.</p>
			<br/>
			<a href="<?= $root ?>/notas.html" class="has-note icon-note" data-target="#intro-note">Clique aqui para saber mais sobre as notas</a>
		</div>

		<div class="content">
			<h2>Por onde eu começo?</h2>
			<hr/>
			<p>Por onde você preferir:</p>
		</div>

		<nav class="link-box">
			<ul>
				<li>
					<a href="<?= $root ?>/visao-geral/">
						<div class="icon">
							<span class="icon-search"></span>
						</div>
						Visão<br/>
						geral
					</a>
				</li>
				<li>
					<a href="<?= $root ?>/educacao/">
						<div class="icon">
							<span class="icon-book"></span>
						</div>
						Internet e<br/>
						educação
					</a>
				</li>
				<li>
					<a href="<?= $root ?>/renda/">
						<div class="icon">
							<span class="icon-coin"></span>
						</div>
						Internet e<br/>
						renda
					</a>
				</li>
				<li>
					<a href="<?= $root ?>/regiao/">
						<div class="icon">
							<span class="icon-location"></span>
						</div>
						Internet e<br/>
						localidade
					</a>
				</li>
				<li>
					<a href="<?= $root ?>/regiao/">
						<div class="icon">
							<span class="icon-users2"></span>
						</div>
						Internet e<br/>
						sexo/idade
					</a>
				</li>
				<div class="clear"></div>
			</ul>
		</nav>

	</div> <!-- container -->

	<?php include 'inc/menu.php'; ?>

	</body>
</html>
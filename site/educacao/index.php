<?php
	$area = 'education';
	$title = 'A educação e o acesso a internet | Visualizando o PNAD Internet 2011';
	include '../inc/header.php';
?>

	<body id="education">

		<div class="first content">
			<h1>
				Impacto da educação na<br/>
				utilização da internet
			</h1>
			<p>
				Qual a relação entre o fato da pessoa estar estudando,<br/>
				a quantidade de anos de estudo e o tipo de rede de ensino<br/>
				com o acesso à internet?
			</p>
		</div>
		<div class="graph-container" id="graph1">
			<div class="graph"></div>
			<a href="#" class="icon-cog settings-link" data-graph="graph1"></a>
			<div class="settings" id="graph1-settings">
				<ul>
					Visualizar por:
					<li class="active"><a href="#">Condição de estudante</a></li>
					<li><a href="#">Anos de estudo</a></li>
					<li><a href="#">Rede de ensino</a></li>
				</ul>
				<a href="#" class="icon-close close-settings-link"></a>
			</div>
		</div>
		<div class="content">
			<h1>
				Impacto da educação na<br/>
				utilização da internet
			</h1>
			<p>
				Qual a relação entre o fato da pessoa estar estudando,<br/>
				a quantidade de anos de estudo e o tipo de rede de ensino<br/>
				com o acesso à internet?
			</p>
		</div>

		<?php include '../inc/menu.php'; ?>

	</body>

</html>
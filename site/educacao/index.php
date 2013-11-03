<?php
	$area = 'education';
	$title = 'A educação e o acesso a internet | Visualizando o PNAD Internet 2011';
	$script = 'education.js';
	include '../inc/header.php';
?>

	<body id="education">

		<div class="first content">
			<h1>Impacto da educação na utilização da internet</h1>
			<p>Qual a relação entre o fato da pessoa estar estudando, a quantidade de anos de estudo e o tipo de rede de ensino com o acesso à internet?</p>
		</div>
		<div class="graph-container" id="graph1">
			<h2 id="graph1-title">Utilização da internet por condição de estudante (2011)</h2>
			<div class="graph"></div>
			<a href="#" id="graph1-annotation" class="annotation icon-question" data-detail="graph1">Quem estuda acessa mais a internet?</a>
			<a href="#" class="icon-cog settings-link" data-graph="graph1"></a>
			<div class="settings" id="graph1-settings">
				<ul>
					Visualizar por:
					<li class="active"><a href="#" id="student-g1a">Condição de estudante</a></li>
					<li><a href="#" id="student-g1b">Anos de estudo</a></li>
					<li><a href="#" id="student-g1c">Rede de ensino</a></li>
				</ul>
				<a href="#" class="icon-close close-settings-link"></a>
			</div>
		</div>
		<div class="content">
			<p>
				Existe alguma relação entre a taxa de analfabetismo e o acesso à internet?
			</p>
		</div>

		<?php include '../inc/menu.php'; ?>

	</body>

</html>
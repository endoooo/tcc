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

		<div class="graph-container" id="edu-graph1">
			<h2 class="title"></h2>
			<div class="graph"></div>
			<a href="#" id="graph1-annotation" class="annotation icon-question" data-detail="graph1">O que olhar?</a>
			<a href="#" class="icon-cog settings-link" data-settings="edu-settings1"></a>
			<div class="settings" id="edu-settings1">
				<ul>
					Visualizar por:
					<li class="active"><a href="#" class="graph-link" data-graph="graph1a">condição de estudante</a></li>
					<li><a href="#" class="graph-link" data-graph="graph1b">anos de estudo</a></li>
					<li><a href="#" class="graph-link" data-graph="graph1c">rede de ensino</a></li>
				</ul>
				<br/>
				<ul>
					Valores:
					<li><label><input type="radio" name="edu1type" value="absolute" checked> absolutos (milhões)</label></li>
					<li><label><input type="radio" name="edu1type" value="percentage"> relativos (%)</label></li>
				</ul>
				<a href="#" class="icon-close close-settings-link"></a>
			</div>
		</div>

		<div class="content">
			<p>Existe alguma relação entre a taxa de analfabetismo e o acesso à internet?</p>
		</div>

		<div class="graph-container" id="graph2">
			<h2 id="graph1-title"></h2>
			<div class="graph"></div>
			<a href="#" id="graph2-annotation" class="annotation icon-question" data-detail="graph2"></a>
			<a href="#" class="icon-cog settings-link" data-graph="graph2"></a>
			<div class="settings" id="graph2-settings">
				<ul>
					Valores:
					<li><label><input type="radio" name="student2type" value="absolute"> absolutos (milhões)</label></li>
					<li><label><input type="radio" name="student2type" value="percentage"> relativos (%)</label></li>
				</ul>
				<a href="#" class="icon-close close-settings-link"></a>
			</div>
		</div>

		<?php include '../inc/menu.php'; ?>

	</body>

</html>
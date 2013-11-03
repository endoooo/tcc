<?php
	$root = '/tcc/site';
?>

<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="utf-8">
		<title><?php echo $title; ?></title>
		<?php if ($script) { ?>
		<script data-main="<?= $root ?>/js/<?= $script ?>" src="<?= $root ?>/js/require.js"></script>
		<?php } ?>
		<link rel="stylesheet" type="text/css" href="<?= $root ?>/css/style.css">
	</head>
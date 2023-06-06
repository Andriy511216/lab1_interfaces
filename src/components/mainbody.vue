<template>
	<div class="container-fluid root">
		<div class="wrapper">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'mainbody',
};
</script>

<style scoped>
.root {
	display: flex;
	flex-direction: column;
	background: rgb(2, 0, 36);
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(121, 9, 104, 0.41883315826330536) 50%,
		rgba(0, 212, 255, 1) 100%
	);
	height: 100vh;
}
.wrapper {
	max-width: 1024px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
}
</style>

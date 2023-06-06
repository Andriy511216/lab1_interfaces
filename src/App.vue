<template>
	<navbar />
	<mainbody />
</template>

<script>
import navbar from './components/navbar.vue';
import mainbody from './components/mainbody.vue';
export default {
	name: 'App',
	components: {
		navbar,
		mainbody,
	},
};
</script>

<style scoped></style>

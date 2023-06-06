<template>
	<div class="container-fluid profile">
		<div class="card card-body profile-content">
			<h1>Profile</h1>
			<div class="mb-md-3 d-grid gap-3">
				<table class="table">
					<tr>
						<th scope="row">Name</th>
						<td>Andrii</td>
					</tr>
					<tr>
						<th scope="row">Email</th>
						<td>andrii511216@gmail.com</td>
					</tr>
					<tr>
						<th scope="row">Birthday</th>
						<td>4.06.2022</td>
					</tr>
					<tr>
						<th scope="row">Sex</th>
						<td>Man</td>
					</tr>
				</table>
				<a type="button" class="btn btn-secondary" href="editprofile">
					<img src="../assets/pen.svg" width="16" height="16" />
					Edit
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'profile',
};
</script>

<style scoped>
.profile {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.profile-content {
	margin-bottom: 100px;
}
</style>

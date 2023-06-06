<template>
	<div class="row about-us">
		<div class="col-md-8 rounded about-us-content">
			<div class="card card-body">
				<h1>About us</h1>
				<div class="mb-md-2 d-grid gap-3">
					<div class="mb-md-2 d-grid gap-3">
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
						<h2>
							Maded by:<br />
							Andrii Antoniuk
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'about',
};
</script>

<style scoped>
.about-us {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.about-us-content {
	margin-bottom: 100px;
}
</style>

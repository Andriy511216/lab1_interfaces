<template>
	<div class="container-fluid editprofile">
		<div class="col-md-5 rounded">
			<div class="card card-body editprofile-content">
				<form name="Update_profile" method="post">
					<h1 style="text-align: center">Edit Profile</h1>
					<div class="mb-md-3 d-grid gap-2">
						<div class="input-group mb-3">
							<span class="input-group-text" id="username">UserName</span>
							<input
								id="firstName"
								type="text"
								class="form-control"
								placeholder="First Name"
								aria-label="First Name"
								aria-describedby="basic-addon1"
							/>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text" id="email">Email</span>
							<input
								id="email"
								type="email"
								class="form-control"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="basic-addon1"
							/>
						</div>
						<form>
							<div class="input-group mb-3">
								<span class="input-group-text" id="=birthday">Birthday:</span>
								<input id="date" type="date" class="form-control" />
							</div>
						</form>
						<div class="input-group mb-3">
							<span class="input-group-text">Sex </span>
							<select
								id="sex"
								class="form-select"
								aria-label="Default select example"
							>
								<option selected value="1">Man</option>
								<option value="2">Woman</option>
							</select>
						</div>
					</div>
					<div class="d-grid gap-2">
						<a
							href="/profile"
							type="submit"
							class="btn btn-primary bt btn-block"
						>
							Save
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'editprofile',
};
</script>

<style scoped>
.editprofile {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.editprofile-content {
	margin-bottom: 100px;
}
</style>

<template>
	<nav
		class="navbar bg-gradient navbar-dark navbar-expand-lg bg-body-tertiary navbar-custom"
		style="background-color: #020024"
	>
		<div class="container-fluid container px-2 px-lg-3">
			<a class="logo" href="">SUPERAPP</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav ms-auto mb-3 mb-lg-1">
					<router-link to="/" class="nav-link-styled">Home</router-link>
					<router-link to="cart" class="nav-link-styled">Cart</router-link>
					<router-link to="about" class="nav-link-styled">About</router-link>
					<li class="nav-item dropdown">
						<a
							class="nav-link-styled dropdown-toggle"
							href="#"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Profile
						</a>
						<ul class="dropdown-menu">
							<router-link to="profile" class="dropdown-item"
								>Profile</router-link
							>
							<router-link to="login" class="dropdown-item">logout</router-link>
							<router-link to="login" class="dropdown-item">login</router-link>
						</ul>
					</li>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'navbar',
};
</script>

<style scoped>
.logo {
	color: #fff;
	font-weight: 900;
	text-decoration: none;
	line-spaces: 10px;
	text-shadow: 0px 2px 0px #000000;
	letter-spacing: 2px;
}

.nav-link-styled {
	color: #fff;
	padding: 5px 20px;
	margin-left: 10px;
	margin-top: 10px;
	border: 1px solid #f5f5f5;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
}

.dropdown-text {
	color: #fff;
}
</style>

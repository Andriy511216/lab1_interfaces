<template>
	<div class="container-fluid login">
		<div class="col-md-5 rounded justify-content-center">
			<div class="card card-body login-content" >
				<form name="Sign_in" method="post">
					<h1 >Sign in</h1>
					<div class="mb-md-3 d-grid gap-2">
						<div class="form-floating">
							<input
								v-model="email"
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<label for="floatingInput">Email address</label>
						</div>
						<div class="form-floating">
							<input
								v-model="password"
								type="password"
								class="form-control"
								id="floatingPassword"
								placeholder="Password"
							/>
							<label for="floatingPassword">Password</label>
						</div>
					</div>
					<div class="d-grid gap-2">
						<button
							type="submit"
							v-on:click="login"
							class="btn btn-primary bt btn-block"
						>
							Login
						</button>
					</div>

					<p class="text-center">
						Don't have a account?
						<router-link to="registration">Sing Up</router-link>
					</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'login',
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		login() {
			const data = {
				email: this.email,
				password: this.password,
			};
			alert(data.password);
			axios
				.get('https://api.coindesk.com/v1/bpi/currentprice.json')
				.then((response) => alert(response));

			// axios.post("http://127.0.0.1:8000/auth/token/login", data)
			//     .then(response => {
			//         console.log(response);
			//         alert(response);
			//     })
			//     .catch(error => {
			//         console.log(error);
			//         alert(error);
			//     });
		},
	},
};
</script>

<style scoped>
.login {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.login-content {
	margin-bottom: 100px;
}
</style>

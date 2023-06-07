<template>
	<div class="container-fluid register">
		<div class="col-md-8 rounded justify-content-center">
			<div class="card card-body">
				<form @submit.prevent="registerUser">
					<h1 style="text-align: center">Sign Up</h1>
					<div class="mb-md-3 d-grid gap-2">
						<div class="input-group mb-3">
							<span class="input-group-text" id="username">Username</span>
							<input
								v-model="username"
								id="username"
								type="text"
								class="form-control"
								placeholder="First Name"
								aria-label="First Name"
								aria-describedby="basic-addon1"
								required
							/>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text">Email</span>
							<input
								v-model="email"
								id="email"
								type="email"
								class="form-control"
								placeholder="Email"
								aria-label="Email"
								aria-describedby="basic-addon1"
								required
							/>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text" id="password">Password</span>
							<input
								v-model="password"
								type="password"
								class="form-control"
								id="password"
								placeholder="Password"
								required
							/>
						</div>
						<div class="input-group mb-3">
							<span class="input-group-text" id="password"
								>Confirm Password</span
							>
							<input
								v-model="confirmPassword"
								type="password"
								class="form-control"
								id="confirmPassword"
								placeholder="confirmPassword"
								required
							/>
						</div>

						<form>
							<div class="input-group mb-3">
								<span class="input-group-text">Birthday:</span>
								<input
									v-model="date"
									id="birthday-input"
									type="date"
									class="form-control"
									required
								/>
							</div>
						</form>
						<div class="input-group mb-3">
							<span class="input-group-text">Sex </span>
							<select
								id="sex"
								v-model="sex"
								class="form-select"
								aria-label="Default select example"
								required
							>
								<option selected value="1">Man</option>
								<option value="2">Woman</option>
							</select>
						</div>
					</div>

					<div class="d-grid gap-2">
						<a
							id="submitBtn"
							href="/login"
							type="submit"
							value="submit"
							class="btn btn-primary bt btn-block"
						>
							Submit
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store/store';
import axios from 'axios';

export default {
	name: 'registration',
	data() {
		return {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			sex: '',
			date: '',
		};
	},
	methods: {
		registerUser() {
			const data = {
				username: this.username,
				email: this.email,
				password: this.password,
				confirmPassword: this.confirmPassword,
				sex: this.sex,
				date: this.date,
			};
			console.log(data);

			const login_data = {
				username: v,
				password: this.password,
			};

			if (
				this.checkPassword() &&
				this.checkDate() &&
				this.checkSex() &&
				this.checkEmail()
			) {
				var correct_data = data;
				correct_data.delete('confirmPassword');
				console.log(correct_data);

				axios
					.post('http://127.0.0.1:8000/api/auth/users/', correct_data)
					.then((response) => {
						console.log(response);
						this.checkData(response);
					})
					.catch((error) => {
						console.log(error);
					});
				console.warn(response.data);
				// store.state.users.push(correct_data);
			} else {
				alert('Please fill all fields');
			}
		},
		checkPassword() {
			return this.password === this.confirmPassword;
		},
		checkDate() {
			if (this.date !== '') {
				return true;
			} else {
				var date = new Date();
				var tmp = this.date.split('-');
				if (
					tmp[0] > date.getFullYear() ||
					tmp[1] > date.getMonth() ||
					tmp[2] > date.getDate()
				) {
					alert('Date is not valid');
					console.log('false');
					return false;
				} else {
					console.log('true');
					return true;
				}
			}
		},
		checkSex() {
			console.log('false');
			return this.sex !== '';
		},
		checkEmail() {
			if (this.email !== '') {
				if (store.state.users.find((user) => user.email === this.email)) {
					alert('Email already exists');

					return false;
				} else {
					console.log('true');
					return true;
				}
			} else {
				console.log('false');
				return false;
			}
		},
	},
};
</script>

<style scoped>
.register {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.register-content {
	margin-bottom: 100px;
}
</style>

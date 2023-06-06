<template>
	<!--  <navbar/>-->
	<div class="col-auto px-2 px-lg-2 m-2">
		<h3>Dogs</h3>
		<div class="card">
			<div class="card-body">
				<div class="row">
					<div class="col col-md-3 px-1">
						<img class="img-thumbnail" src="../images/1.jpeg" />
					</div>
					<div class="col-auto col-md-6 px-2">
						<p class="text">Name: Pokemon</p>
						<p class="text">Price: 300$</p>
						<p class="text">Description: Top</p>
					</div>
					<div class="col col-md-3 px-1">
						<button
							@click="increase"
							class="btn-outline-success btn update-cart"
							data-product=""
							data-action="add"
							href=""
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
			<hr />
			<div class="card-body">
				<div class="row">
					<div class="col col-md-3 px-1">
						<img class="img-thumbnail" src="../images/2.jpeg" />
					</div>
					<div class="col-auto col-md-6 px-2">
						<p class="text">Name: Nafnaf</p>
						<p class="text">Price: 500$</p>
						<p class="text">Description: Best dog ever</p>
					</div>
					<div class="col col-md-3 px-1">
						<button
							@click="increase"
							class="btn-outline-success btn update-cart"
							data-product=""
							data-action="add"
							href=""
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col col-md-3 px-1">
						<img class="img-thumbnail" src="../images/3.jpeg" />
					</div>
					<div class="col-auto col-md-6 px-2">
						<p class="text">Name: Luffy</p>
						<p class="text">Price: 1500$</p>
						<p class="text">Description: Good dog</p>
					</div>
					<div class="col col-md-3 px-1">
						<button
							@click="increase"
							class="btn-outline-success btn update-cart"
							data-product=""
							data-action="add"
							href=""
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<router-view></router-view>
</template>

<script>
import navbar from './navbar.vue';
import store from '@/store/store';
export default {
	name: 'TheStore',
	methods: {
		increase() {
			store.state.count++;
		},
	},
};
</script>

<style scoped></style>

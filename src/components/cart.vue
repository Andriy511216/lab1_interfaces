<template>
	<br />
	<div class="container-md p-1 card">
		<div class="row">
			<div class="col col-md-4">
				<router-link to="/" class="btn bg-info">
					&lt;- Back to shoping</router-link
				>
			</div>
			<div class="col-auto">
				<h2>Cart</h2>
			</div>
		</div>

		<hr />
		<table class="table">
			<tr>
				<th>
					<h5>Items: <strong>1</strong></h5>
				</th>
				<th>
					<h5>Total: <strong>300</strong></h5>
				</th>
				<th>
					<a
						style="float: right; margin: 5px"
						class="btn bg-success"
						href="checkout"
						>Checkout</a
					>
					<!--                <th><a style="float: right;margin: 5px" class="btn btn-success" href="">Checkout</a>-->
				</th>
			</tr>
		</table>
	</div>
	<br />
	<br />
	<div class="col-auto p-1 card">
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Item</th>
					<th scope="col">Price</th>
					<th scope="col">Quantity</th>

					<th scope="col">Total</th>
				</tr>
			</thead>
			<tbody>
				<!--      {% for  elem in items %}-->
				<tr>
					<th scope="row">
						<img src="../images/1.jpeg" style="width: 100px; height: 100px" />
					</th>
					<td>
						<p class="px-lg-2"></p>
						1
					</td>
					<td>
						<p class="px-lg-2"></p>
						300
					</td>
					<td>
						<p class="px-sm-2">
							<button class="btn update-cart" data-product="" data-action="add">
								+
							</button>
							<button
								class="btn update-cart"
								data-product=""
								data-action="remove"
							>
								-
							</button>
						</p>
					</td>
					<td>
						<p class="px-lg-2"></p>
						300
					</td>
				</tr>
				<!--      {% endfor %}-->
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'cart',
};
</script>

<style scoped></style>

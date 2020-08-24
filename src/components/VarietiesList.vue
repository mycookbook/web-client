<template>
<div class="ui container">
	<Navigation />
	<div class="ui grid">
		<h2 class="capitalize">
			{{ recipe.name }} - submitted varieties
		</h2>
		<div class="ui large label sixteen wide computer column sixteen wide mobile column">
			<!-- Submitted Varieties for {{ recipe.name }} recipe -->
			{{ recipe.summary }}
		</div>
	</div>
	<div class="ui grid">
		<div class="fourteen wide computer column sixteen wide mobile column" v-for="v in varieties">
			<div>
				<div class="ui header">
				<h3>{{ transformRecipeName(v.name) }}</h3>
			</div>
			<div class="ui grid">
				<div class="four wide computer column sixteen wide mobile column">
					<div class="ui ribbon label">
						Prep &#38; cook Time: 45 mins
					</div>
					<div>
						<img class="ui massive image" :src="v.imgUrl" :alt="v.name">
					</div>
				</div>
				<div class="twelve wide computer column sixteen wide mobile column">
					<div>
						Gbegiri is a traditional Nigerian bean soup consisting of honey beans (also called brown beans), smoked or fresh fish, ground crayfish, 
						palm oil, stock, irú (locust beans), salt, and pepper. The beans are soaked, peeled, and mashed to a smooth paste, which is then combined 
						with the other ingredients and cooked until the mixture reaches a slightly thickened consistency.<br><br>
						This dish is traditionally prepared by the Yoruba people from South-Western Nigeria, and it is typically enjoyed with a side of ewedu soup, 
						stewed meat (usually from a beef and chicken stew), and Nigerian fufu (swallow foods) such as eba, amala, or tuwo shinkafa.
					</div>
					<br />
					<div class="ui light blue label" v-for="i in ingredients(v.ingredients)" style="margin-top: 1%;">
						{{ i }}
					</div>	
				</div>
			</div>
			<br><br>
			<div class="tvn horizontal stroke"></div>
			<br>
			</div>
		</div>
		<div class="two wide computer column sixteen wide mobile column">
			<small>ad space</small>
			<img class="ui massive image" src="https://cookieandkate.com/images/2020/03/how-to-start-a-food-blog.jpg" />
			<small>ad space</small>
		</div>
	</div>
	<Contact />
	<Bottom />
</div>
</template>

<script>
import Navigation from './Navigation'
import Contact from './Contact.vue'
import Bottom from './Bottom.vue'

export default {
	name: "VarietiesList",
	mounted() {
		this.recipe = this.$store.getters['get_recipe'](
			this.$route.params.cookbookId,
			this.$route.params.recipeId,
		)
		this.varieties = this.$store.getters['get_varieties'](
			this.$route.params.cookbookId,
			this.$route.params.recipeId,
		)
	},
	data() {
		return {
			recipe: {},
			varieties: []
		}
	},
	components: {
		Navigation,
		Contact,
		Bottom
	},
	methods: {
			transformRecipeName(name) {
			const t = name;
			return t.toUpperCase();
		},
			ingredients(data) {
			return JSON.parse(JSON.parse(data)).data;
		},
	}
};
</script>
<style scoped>
.container {
	margin-top:23vh;
}
.capitalize {
	text-transform: capitalize!important;
}
</style>
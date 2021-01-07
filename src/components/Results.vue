<template>
<div>
    <div class="ui meals container" v-if="cookbooks.length > 0">
		<div class="meal section">
			<div class="content">
				<div class="ui grid">
					<div class="sixteen wide mobile column sixteen wide tablet column eight wide computer column eight wide large screen column" v-for="cookbook in cookbooks" :id="cookbook.id">
						<div class="serving card">
							<div class="image wrapper">
								<div class="image" 
									:style="{ 'background-image': 'url(' + cookbook.bookCoverImg + ')' }">
									<span role="img" :aria-label="cookbook.alt_text" ></span>
								</div>
							</div>
							<div class="content">
								<div class="ui sub header">
									<span :style="{ 'float': 'right' }">
										proudly
										<i :class="generateFlagClass(cookbook.flag.flag)" 
										:title="cookbook.flag.nationality"></i>
									</span>
								</div>
								<div class="ui labels">
									<a class="ui tiny label" v-for="category in cookbook.categories" :style="{ 'background-color': getBgColor(category.color)}">
										<span>{{ category.name }}</span>
										<span v-html="category.emoji"></span>
									</a>
								</div>
								<div class="ui medium header cookbook-title">
									{{ cookbook.name }}
								</div>
								<div class="tvn vertical fade clipped description">
									{{ cookbook.description }}
								</div>
								<div class="footer options">
									<span>
										<router-link :to="{name: 'Cookbook',params: {id: cookbook.id}}">
											<button class="ui primary left floated basic button">
												{{ cookbook.recipes.length }} Recipe(s)
											</button>
										</router-link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<span style="float:right!important;">
				<a href="/#/cookbooks">
					see all <i class="ui arrow right icon"></i>
				</a>
			</span>
		</div>
		<br /><br />
		<div class="tvn horizontal stroke"></div>
	</div>
	<div class="ui sixteen wide column" v-else>
		<NothingToShowYou :htmlText="followUpText" />
		<div class="tvn horizontal stroke"></div>
	</div>
</div>
</template>

<script>
import NothingToShowYou from './NothingToShowYou.vue';

export default {
	name: 'Latest',
	data() {
		return {
			followUpText: ""
		};
	},
	props: {
		cookbooks: Array,
	},
	methods: {
		generateFlagClass(code) {
			return `${code} flag`;
		},
		getBgColor(code) {
			return `#${code}`;
		}
	},
	components: {
		NothingToShowYou
	}
}
</script>

<style scoped>
a.ui.label {
	cursor: none!important;
	text-transform: capitalize!important;
}
.cookbook-title {
	text-transform: capitalize;
}
</style>
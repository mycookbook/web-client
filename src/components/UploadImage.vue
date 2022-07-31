<template>
<div>
	<div style="border:1px dashed blue;height:150px;">
		<div style="margin-left:25%;margin-top:8%;">
			Drop or upload Cookbook Cover image
		</div>
		<br />
		<div style="margin-left:40%;">
			<div class="ui tbb button">
				Upload
			</div>
			<input type="file" id="myfile" name="myfile" hidden />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "UploadImage",
	mounted() {},
	computed: {
		example() {
			return true
		}
	},
	props: {
		numbers: Array
	},
	data() {
		return {
			title: 'This is an Example component'
    	}
  	},
	filters: {
		exampleFilter() {}
	},
	components: {
		
	}
};
</script>

<style scoped>
.example-class {
	color: #000000;
}
</style>
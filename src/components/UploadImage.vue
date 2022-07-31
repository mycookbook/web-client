<template>
<div>
	<div class="ui small grey header label">
		create a new cookbook
	</div>
	<br />
	<div style="border:1px dashed blue;height:170px;">
		<div style="margin-left:32%;margin-top:8%;">
			Upload Cookbook Cover Image
		</div>
		<div style="margin-left:18%;">
			<div class="ui header">
				Image dimension for best results (1127 x 650px)
			</div>
		</div>
		<br />
		<div style="margin-left:40%;">
			<div class="ui tbb button">
				Upload
			</div>
			<form enctype="multipart/form-data" method="post">
				<input type="file" id="myfile" name="myfile" hidden />
			</form>
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
<template>
	<div>
		<div class="ui small grey header label">
			create a new cookbook
		</div>
		<br />
		<div class="cookbookEditor">
			<div>
				<div>
					Upload Cookbook Cover Image
				</div>
				<div>
					<div class="ui header">
						Image dimension for best results (1127 x 650px)
					</div>
				</div>
				<br />
				<div>
					<div class="ui tbb button" @click="showFileFinder()">
						Upload
					</div>
					<form enctype="multipart/form-data" method="post">
						<input type="file" id="myfile" name="myfile" hidden />
					</form>
				</div>
				<br />
				<div>
					{{ fileName }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UploadImage",
	mounted() { },
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
			fileName: ''
		}
	},
	filters: {
		exampleFilter() { }
	},
	methods: {
		showFileFinder() {
			$('#myfile').trigger('click');

			const input = document.querySelector('input');
			input.addEventListener('change', (e) => {
				const [file] = e.target.files;
				console.log('file', file)
				this.fileName = file.name
			})
		}
	}
};
</script>

<style scoped>
.cookbookEditor {
	border: 1px dashed blue;
	height: 170px;
	align-items: center;
	justify-content: center;
	display: flex;
}
</style>
<template>
	<div>
		<div class="cookbookEditor">
			<div style="text-align:center">
				<div>
					{{ description }}
				</div>
				<div>
					<div class="ui header">
						{{ imageDimensionMsg }}
					</div>
				</div>
				<br />
				<div>
					<div class="ui tbb button" @click="showFileFinder()">
						Upload
					</div>
					<form enctype="multipart/form-data" method="post">
						<input type="file" id="myfile" name="myfile" :accept="acceptTypes" hidden />
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
	props: {
		description: String,
		imageDimensionMsg: String,
		acceptTypes: String
	},
	data() {
		return {
			fileName: ''
		}
	},
	methods: {
		showFileFinder() {
			$('#myfile').trigger('click');

			const input = document.querySelector('input');
			input.addEventListener('change', (e) => {
				const [file] = e.target.files;
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
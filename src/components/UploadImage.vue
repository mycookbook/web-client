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
						Select & Upload
					</div>
					<form enctype="multipart/form-data" method="post">
						<input type="file" id="myfile" name="myfile" ref="file" :accept="acceptTypes" hidden />
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
	computed: {
		errorMessage: function (){
			alert(this.state.upload_error)
		}
	},

	methods: {
		showFileFinder() {
			$('#myfile').trigger('click');

			const input = document.querySelector('input');
			input.addEventListener('change', (e) => {
				const file = e.target.files[0];
				this.fileName = file.name;
				this.$store.dispatch('upload_to_s3', file)
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
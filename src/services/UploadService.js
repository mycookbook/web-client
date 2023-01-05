import Vue from 'vue'
import S3Adapter from '../adapters/S3Adapter'

export default class UploadService extends Vue {
	adapter = new S3Adapter()
	
	upload(file) {
		return this.adapter.upload(file)
	}

	delete(key) {
		return this.adapter.delete(key)
	}
}

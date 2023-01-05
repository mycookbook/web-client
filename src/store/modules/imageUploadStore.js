import UploadService from '../../services/UploadService'

export const imageUploadStore = {
    mutations: {
        SET_IMAGEPATH(state, response) {
            if (response.code !== 200) {
                this.state.upload_error = 'Sorry, an error occured while uploading the image, please try again.'
            } else {
                this.state.imagePath = response.bucketUrl
            }
        },
        RESET_ERROR_MSG(state) {
            this.state.upload_error = null
        }
    },
    actions: {
        async upload_image(context, file) {
            const service =  new UploadService()
            const response = await service.upload(file)
            
            context.commit('RESET_ERROR_MSG')
            context.commit('SET_IMAGEPATH', response)
        },
        delete_image(context,key) {
            const service = new UploadService()
            service.delete(key)
        },
        reset_error_msg(context) {
            context.commit('RESET_ERROR_MSG')
        }
    }
}

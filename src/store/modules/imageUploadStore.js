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
        RESET_MSGS(state) {
            this.state.upload_error = null
            this.state.imagePath = ""
        }
    },
    actions: {
        async upload_image(context, file) {
            context.commit('SET_LOADING_STATE', true)

            const service =  new UploadService()
            const response = await service.upload(file)
            
            context.commit('RESET_MSGS')
            context.commit('SET_IMAGEPATH', response)
            context.commit('SET_LOADING_STATE', false)
        },
        delete_image(context,key) {
            const service = new UploadService()
            service.delete(key)
        },
        reset_msgs(context) {
            context.commit('SET_LOADING_STATE', false)
            context.commit('RESET_MSGS')
        }
    }
}

import UploadService from '../../services/UploadService'

export const imageUploadStore = {
    mutations: {
        SET_IMAGEPATH(state, response) {
            console.log(response)
            // this.state.imagePath = newState.data.imagePath

            //todos:
            //1. if response.error set the error in the state object, you can watch for this
            //using computed props in the ImgaeUpload component, that way if there is an error 
            //it can be displayed to the use in real time

            //if !response.error then go ahead and use the image url as needed
        }
    },
    actions: {
        async upload_to_s3(context, file) {
            alert('uploading')
            const service = new UploadService()
            const response = await service.upload(file)

            if (response.code == 200) {
                context.commit('RESET_MSGS')
                context.commit('SET_IMAGEPATH', response)
                context.commit('SET_LOADING_STATE', false)
            } else {
                context.commit('HANDLE_ERROR', response)
            }
        },
        delete_image(context, key) {
            const service = new UploadService()
            service.delete(key)
        },
        reset_msgs(context) {
            context.commit('SET_LOADING_STATE', false)
            context.commit('RESET_MSGS')
        }
    }
}

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
            context.commit('SET_IMAGEPATH', service.upload(file))
        },
        delete_from_s3(key) {
            const service = new UploadService()
            service.delete(key)
        }
    }
}

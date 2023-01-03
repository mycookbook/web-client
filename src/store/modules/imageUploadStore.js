import UploadService from '../../services/UploadService'

export const imageUploadStore = {
    mutations: {
        SET_IMAGEPATH(state, response) {
            if(response.code == 500) {
                this.state.upload_message = 'Error uploading the file, please try again'
                alert(this.state.upload_message)
            }
           
            if(response.code == 200) {
                this.state.imagePath = newState.data.imagePath
            }

            else {
                this.state.upload_message = 'Error uploading the file, please contact the administrator'
                alert(this.state.upload_message)
            }
        }
    },
    actions: {
        async upload_to_s3(context, file) {
            alert('uploading')
            const service =  new UploadService()
            const response = await service.upload(file)
            context.commit('SET_IMAGEPATH', response)
        },
        delete_from_s3(key) {
            const service = new UploadService()
            service.delete(key)
        }
    }
}

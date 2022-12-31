import axios from 'axios';
const aws = require('aws-sdk')


export const imageUploaderStore = {
    mutations: {
        SET_IMAGEPATH(state, newState) {
            this.state.imagePath = newState.data.imagePath
        }
    },

    actions: {
        upload_to_s3(context, payload) {
            const file = payload;
            aws.config.update({
                secretAccessKey: process.env.DEV_SECRET_ACCESS_KEY,
                accessKeyId: process.env.DEV_ACCESS_KEY_ID,
            })
            const s3 = new aws.S3({
                signatureVersion: 'v4',
                region: process.env.DEV_AWS_REGION,
            })
            

            const key = 'static/uploads/' + Date.now() + '-' + file.name.replace(/\s/g, '-')
            const params = {
                Bucket: process.env.DEV_AWS_BUCKET,
                Key: key,
                Expires: 10,
                ContentType: file.type,
                
            }
            

            const url = s3.getSignedUrl('putObject', params)
            return axios
                .put(url, file, {
                    headers: {
                        'Content-Type': file.type,
                    },
                })
                .then(result => {
                    const bucketUrl = decodeURIComponent(result.request.responseURL).split(
                        key
                    )[0]
                    result.key = key
                    result.fullPath = bucketUrl + key
                    return result
                })
                .catch(error => {
                    console.log(error)
                })
        },

        delete_from_s3(key){
            const params = {
                Bucket: process.env.VUE_APP_APP_AWS_BUCKET,
                Key: key,
            }
            const data = s3.deleteObject(params).promise()
            return data;
        }
    }
}
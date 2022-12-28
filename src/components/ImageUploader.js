const aws = require('aws-sdk')
import axios from 'axios';

aws.config.update({
    secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY,
})

export const s3 = new aws.S3({
    signatureVersion: 'v4',
    region: process.env.VUE_APP_AWS_REGION,
})


export function singleUpload (file, folder) {
    console.log('this is working')
    console.log(folder)
    const key = folder + '/' + Date.now() + '-' + file.name.replace(/\s/g, '-')
    const params = {
        Bucket: process.env.VUE_APP_AWS_BUCKET,
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
}

//delete an image
export function deleteObject (key){
    const params = {
        Bucket: process.env.VUE_APP_APP_AWS_BUCKET,
        Key: key,
    }
    const data = s3.deleteObject(params).promise()
    return data;
}
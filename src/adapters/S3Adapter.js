import axios from 'axios';
import aws from 'aws-sdk';
import Vue from 'vue'

export default class UploadService extends Vue {
    async upload(file) {
        const s3 = new aws.S3({
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            accessKeyId: process.env.ACCESS_KEY_ID,
            signatureVersion: 'v4',
            region: process.env.AWS_REGION
        })

        const key = Date.now() + '-' + file.name.replace(/\s/g, '-')

        const params = {
            Bucket: process.env.AWS_BUCKET,
            Key: key,
            Expires: 10,
            ContentType: file.type
        }

        const url = s3.getSignedUrl('putObject', params)

        try {
            const result = await axios
                .put(url, file, {
                    headers: {
                        'Content-Type': file.type,
                    },
                });

            const bucketUrl = decodeURIComponent(result.request.responseURL).split(key)[0] + key

            return {
                code: 200,
                bucketUrl: bucketUrl
            };
        } catch (error) {
            console.log('err', error)
            return {
                code: 403,
                error: error
            };
        }
    }

    delete(key) {
        const params = {
            Bucket: process.env.VUE_APP_APP_AWS_BUCKET,
            Key: key,
        }

        return s3.deleteObject(params).promise()
    }
}

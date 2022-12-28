<template>
    <div class="ui grid container">
        <div class="ui grid">
            <Navigation />
            <div class="sixteen wide mobile column sixteen wode mobile column contents">
                <div class="title">
                    CookbooksHQ API v1 <i class="ui small tag icon"></i>
                </div>
                <div class="ui divider"></div>
                <div class="content">
                    Dear talented developer, thank you for your interest in consuming our api for your projects. 
                    We are very happy that you're helping build mobile apps and services to help us reach our goal. 
                    Unfortunately, CookbooksHQ API is currently in v1 and is not a public API. But in the near future, 
                    v2 will be released. v2 will be a public api. You will be needing an `APP_KEY` and `APP_SECRET` 
                    in order to consume the api. Check back here again soon for updates.
                </div>
               <br /><br />
                <div class="ui buttons">
                    <div class="ui button disabled">
                        <i class="ui terminal icon"></i>
                        <a href="https://developers.cookbookshq.com" target="_blank">
                            Developer Console
                        </a>
                    </div>
                     <div class="ui blue button disabled">
                         <i class="ui code icon"></i>
                        Documentation
                    </div>
                    
                    <!-- dev testing remove after use -->
                    <div class="ui blue button">
                        <i class="ui code icon"></i>
                        <input type="file" @change="uploadFile"/>
                       Documentation
                   </div>

                     <!-- dev testing remove after use -->

                </div>
            </div>
            <Contact />
            <Bottom />
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation';
import Contact from './Contact.vue';
import Bottom from './Bottom.vue';
import { singleUpload } from './ImageUploader';

export default {
    name: 'Developers',
    methods: {
       async uploadFile(event){
        const fileSend = event.target.files[0];
        console.log(fileSend.name)
        const result = await singleUpload(fileSend, 'static/uploads/')
        
        console.log(result);
       }
    },
    components: {
        Navigation,
        Contact,
        Bottom,
        singleUpload,
    }
}
</script>

<style scoped>
.contents {
    margin-top: 25vh!important;
}
.title {
    font-size: 25px;
    font-weight: 300!important;
}
.content {
    font-weight:300!important;
    padding-right: 45px;
}
</style>
<template>
    <div>
        <div class="ui tbb fluid button" @click="CopyContents(htmlTagId)" v-if="!isCopied" :title="tooltip">
            <i class="ui computer icon"></i>Copy
        </div>
        <div class="ui disabled button" v-else>Copied</div>
    </div>
</template>
    
<script>
export default {
    name: "CopyCopiedButtonsWidget",
    props: {
        htmlTagId: String,
        tooltip: String
    },
    computed: {
        isCopied() {
            return this.copied
        }
    },
    data() {
        return {
            copied: false
        }
    },
    methods: {
        CopyContents(htmlTagId) {
            var message = document.createRange()
            message.selectNode(document.getElementById(htmlTagId))
            window.getSelection().removeAllRanges()
            window.getSelection().addRange(message)
            document.execCommand('copy')
            window.getSelection().removeAllRanges()
            navigator.clipboard.writeText(message)
            
            this.copied = true
        }
    }
};
</script>

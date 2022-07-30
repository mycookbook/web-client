<template>
    <div style="background-color:#F4F4F4;border-radius: 8px; width: 100%; height: auto; padding:15px">
        <div>
            <h3>Who to follow</h3>
        </div>
        <br />
        <div>
            <Follow :followers="followers" :author="author" :avatar="avatar" :handle="handle" />
            <Follow :followers="followers" :author="author" :avatar="avatar" :handle="handle" />
        </div>
    </div>
</template>

<script>
import Follow from './Follow.vue';

export default {
    name: "Example",
    mounted() { },
    computed: {
        example() {
            return true
        }
    },
    props: {
        numbers: Array
    },
    data() {
        return {
            title: 'This is an Example component',
            followers: '0',
            author: "Mrs Diomonde",
            avatar: "https://media-exp2.licdn.com/dms/image/C5603AQEevNlf1HqCkQ/profile-displayphoto-shrink_800_800/0/1655683956974?e=1661990400&v=beta&t=4-NHoPTEItzBB8gTsd0JIkGZfoYraG53mpTVjUhZlJY",
            handle: "@my handle"
        }
    },
    filters: {
        exampleFilter() { }
    },
    components: {
    Navigation,
    Follow
}
};
</script>

<style scoped>
.example-class {
    color: #000000;
}
</style>
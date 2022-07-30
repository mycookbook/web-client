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
            avatar: "https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg",
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
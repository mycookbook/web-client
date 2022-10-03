<template>
    <div style="background-color:#F4F4F4;border-radius: 8px; width: 100%; height: auto; padding:15px">
        <div>
            <h3>Who to follow</h3>
        </div>
        <br />
        <div>
            <Follow :toFollowList="toFollowList" />
        </div>
    </div>
</template>

<script>
import Follow from './Follow.vue';

export default {
    name: "Example",
    data() {
        return {
            toFollowList: [
                {
                    followers: '67K',
                    author: "Mrs Elvis",
                    avatar: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
                    handle: "mummy-obiora",
                },
                {
                    followers: '3',
                    author: "Edmond Olson",
                    avatar: "https://bit.ly/3cgr09f",
                    handle: "mjay",
                },
                {
                    followers: '10K',
                    author: "Elvis Diomonde",
                    avatar: "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
                    handle: "edmond-olson",
                }
            ]
        }
    },
    components: {
        Follow
    }
};
</script>

<style scoped>
.example-class {
    color: #000000;
}
</style>
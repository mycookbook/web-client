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
            followers: '0',
            author: "Mrs Diomonde",
            avatar: "https://media-exp2.licdn.com/dms/image/C5603AQEevNlf1HqCkQ/profile-displayphoto-shrink_800_800/0/1655683956974?e=1661990400&v=beta&t=4-NHoPTEItzBB8gTsd0JIkGZfoYraG53mpTVjUhZlJY",
            handle: "mjay",
            toFollowList: [
                {
                    followers: '67K',
                    author: "Mrs Elvis",
                    avatar: "https://media-exp2.licdn.com/dms/image/C5603AQEevNlf1HqCkQ/profile-displayphoto-shrink_800_800/0/1655683956974?e=1661990400&v=beta&t=4-NHoPTEItzBB8gTsd0JIkGZfoYraG53mpTVjUhZlJY",
                    handle: "mjay",
                },
                {
                    followers: '300K',
                    author: "Mrs Jean",
                    avatar: "https://media-exp2.licdn.com/dms/image/C5603AQEevNlf1HqCkQ/profile-displayphoto-shrink_800_800/0/1655683956974?e=1661990400&v=beta&t=4-NHoPTEItzBB8gTsd0JIkGZfoYraG53mpTVjUhZlJY",
                    handle: "mjay",
                },
                {
                    followers: '10K',
                    author: "Elvis Diomonde",
                    avatar: "https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E",
                    handle: "mjay",
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
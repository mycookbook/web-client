<template>
    <div class="ui feed">
        <div class="event">
            <div class="label">
                <img
                    src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E">
            </div>
            <div class="content">
                <div class="summary">
                    <a class="user">
                        Elliot Fu
                    </a> added you as a friend
                    <div class="date">
                        1 Hour Ago
                    </div>
                </div>
                <div class="meta">
                    <a class="like">
                        <i class="like icon"></i> 4 Likes
                    </a>
                </div>
            </div>
        </div>
        <div class="event">
            <div class="label">
                <img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg">
            </div>
            <div class="content">
                <div class="summary">
                    <a>Helen Troy</a> added <a>2 new illustrations</a>
                    <div class="date">
                        4 days ago
                    </div>
                </div>
                <div class="extra images">
                    <a><img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg"></a>
                </div>
                <div class="meta">
                    <a class="like">
                        <i class="like icon"></i> 1 Like
                    </a>
                </div>
            </div>
        </div>
        <div class="event">
            <div class="label">
                <img
                    src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E">
            </div>
            <div class="content">
                <div class="summary">
                    <a class="user">
                        Jenny Hess
                    </a> added you as a friend
                    <div class="date">
                        2 Days Ago
                    </div>
                </div>
                <div class="meta">
                    <a class="like">
                        <i class="like icon"></i> 8 Likes
                    </a>
                </div>
            </div>
        </div>
        <div class="event">
            <div class="label">
                <img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg">
            </div>
            <div class="content">
                <div class="summary">
                    <a>Joe Henderson</a> posted on his page
                    <div class="date">
                        3 days ago
                    </div>
                </div>
                <div class="extra text">
                    Ours is a life of constant reruns. We're always circling back to where we'd we
                    started,
                    then
                    starting all over again. Even if we don't run extra laps that day, we surely
                    will come
                    back
                    for more of the same another day soon.
                </div>
                <div class="meta">
                    <a class="like">
                        <i class="like icon"></i> 5 Likes
                    </a>
                </div>
            </div>
        </div>
        <div class="event">
            <div class="label">
                <img src="https://miro.medium.com/fit/c/176/176/1*4AfUx9n6IbS9YdruelgsDA@2x.jpeg">
            </div>
            <div class="content">
                <div class="summary">
                    <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                    <div class="date">
                        4 days ago
                    </div>
                </div>
                <div class="extra images">
                    <a><img
                            src="https://media-exp2.licdn.com/dms/image/C5603AQHPA8VEPr9RKA/profile-displayphoto-shrink_400_400/0/1643647555390?e=1663804800&v=beta&t=WejZ3ARFlAU-sFG768GU0VsirBid89aIcyCkC5dKB-E"></a>
                </div>
                <div class="meta">
                    <a class="like">
                        <i class="like icon"></i> 41 Likes
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeedData",
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
            title: 'This is an Example component'
        }
    },
    filters: {
        exampleFilter() { }
    }
};
</script>

<style scoped></style>
<template>
<div>
    <div class="ui grid">
        <div class="ui two wide computer column sixteen wide mobile column">
            <div>
                <PuSkeleton square height="50px" width="100%" />
            </div>
            <div>
                <PuSkeleton />
            </div>
            <div>
                <PuSkeleton />
            </div>
            <div>
                <PuSkeleton />
            </div>
        </div>
        <div class="ui eleven wide computer column sixteen wide mobile column">
            <div class="ui grid">
                <div class="ui four wide computer column sixteen wide mobile column"><PuSkeleton /></div>
                <div class="ui two wide computer column sixteen wide mobile column"><PuSkeleton /></div>
            </div>
            <div class="ui grid">
                <div class="ui four wide computer column sixteen wide mobile column">
                    <PuSkeleton square height="100%" />
                </div>
                <div class="ui ten wide computer left floated column sixteen wide mobile column">
                    <PuSkeleton />
                    <PuSkeleton />
                    <PuSkeleton />
                </div>
            </div>
            <div class="ui grid">
                <div class="ui sixteen wide computer column sixteen wide mobile column">
                    <PuSkeleton square width="100%" height="350px" />
                </div>
            </div>
        </div>
        <div class="ui three wide computer column sixteen wide mobile column">
            <PuSkeleton rectangle height="450px" />
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "RecipeCardSkeleton"
};
</script>

<template>
<div>
    <div class="ui twelve wide left header">
        <PuSkeleton width="25%"/>
        <div class="ui secondary menu flex-container">
            <a class="active item">
                <PuSkeleton />
            </a>
            <a class="active item">
                <i class="ellipsis horizontal icon"></i>
            </a>
        </div>
    </div>
    <div class="ui grid">
        <div class="three column row">
            <div class="column">
                <div class="ui grid">
                    <div class="two column row">
                        <div class="column">
                            <PuSkeleton square height="180px" width="115%" />
                        </div>
                        <div class="column">
                            <PuSkeleton class="ui right floated" />
                            <PuSkeleton class="ui right floated" />
                            <PuSkeleton width="25%"/>
                            <PuSkeleton width="25%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui grid">
                    <div class="two column row">
                        <div class="column">
                            <PuSkeleton square height="180px" width="115%" />
                        </div>
                        <div class="column">
                            <PuSkeleton class="ui right floated" />
                            <PuSkeleton class="ui right floated" />
                            <PuSkeleton width="25%"/>
                            <PuSkeleton width="25%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui grid">
                    <div class="two column row">
                        <div class="column">
                            <PuSkeleton square height="180px" width="115%" />
                        </div>
                        <div class="column">
                            <PuSkeleton class="ui right floated" />
                            <PuSkeleton class="ui right floated" />
                            <PuSkeleton width="25%"/>
                            <PuSkeleton width="25%"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: "DefaultSkeleton",
}
</script>

<template>
<div class="ui container" style="text-align:center!important;">
    <div>
		<p class="ui item button">Nothing to show you!</p>
	</div>
		<small v-html="htmlText"></small>
    </div>
</template>

<script>
export default {
    name: 'NothingToShowYou',
    props: {
        htmlText: String
    }
}
</script>
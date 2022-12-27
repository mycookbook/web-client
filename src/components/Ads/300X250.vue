<template>
  <div>
    <div class="sixteen wide computer column sixteen wide mobile column">
      <a :href="randomImages.href" target="_blank">
        <img :src="randomImages.src" class="ui massive fluid image" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreehundredByTwofifty",
  computed: {
    randomImages() {
      let list = [
        {
          href: 'https://eatbinchi.com/product/binchi-box?tracking=&campaign_id=&_id=',
          src: '/static/img/campaigns/eat-binchi/vegeterian-box.png'
        }, {
          href: 'https://eatbinchi.com/product-category/prepared-meals/',
          src: '/static/img/campaigns/eat-binchi/chefs-choice.png'
        }, {
          href: 'https://eatbinchi.com/product/binchi-box/',
          src: '/static/img/campaigns/eat-binchi/flexi-box.png'
        }
      ]

      return list[Math.floor(Math.random() * list.length)]
    }
  }
};
</script>

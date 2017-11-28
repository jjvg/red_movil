<template>
  <v-ons-page id="app">
    <div>
		<transition name="fade">
      <router-view class="child-view"></router-view>
    </transition>
	</div>
    <div id="deviceready" class="blink">
      <p class="event listening"></p>
      <p class="event received"></p>
    </div>
  </v-ons-page>
   
</template>

<script>

export default {
  name: 'app',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ons-back-buttom{
  color: whitesmoke;
}
</style>

<template>
  <v-ons-page>
   <div>
      <v-ons-toolbar class="toolbar--material">
          <div class="center">REDCOM1</div>
    </v-ons-toolbar>
   </div>

     <v-ons-tabbar material swipeable position="auto"
              :tabs="tabs"
              :visible="true"
              :index.sync="activeIndex">
      </v-ons-tabbar>
   </v-ons-page>
</template>
<script>
export default {
  name: 'toolbar',

 data () {
    return {
      msg: 'Welcome',
      essentialLinks: [
        {
          label: 'Core Docs',
          link: 'https://vuejs.org',
          icon: 'fa-book'
        },
        {
          label: 'Community Chat',
          link: 'https://chat.vuejs.org',
          icon: 'fa-commenting'
        },
        {
          label: 'Forum',
          link: 'https://forum.vuejs.org',
          icon: 'ion-chatboxes'
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/vuejs',
          icon: 'fa-twitter'
        },
        {
          label: 'Docs for this template',
          link: 'http://vuejs-templates.github.io/webpack/',
          icon: 'fa-file-text'
        }
      ],
      spdVisible: true,
      spdOpen: true,
      spdStyle: {
        backgroundColor: this.$ons.platform.isIOS() ? '#4282cc' : null
      },
      shareItems: {
        'Twitter': 'md-twitter',
        'Facebook': 'md-facebook',
        'Google+': 'md-google-plus'
      }
    };
    
  },
  methods: {
    goTo (url) {
      window.open(url, '_blank')
    }
  }}

</script>
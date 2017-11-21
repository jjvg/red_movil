<template>
  <div class="left">
            <router-link to="/home"><v-ons-back-button>Page 1</v-ons-back-button></router-link>
        </div>
        <div class="center"><img src='../assets/img/rc1.png'  class="logo"></div>
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
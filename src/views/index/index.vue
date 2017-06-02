<template>
  <div class="v-index">
    <router-link :to="{ path: '/btn' }">btn</router-link>
    <router-link :to="{ path: '/flex' }">flex</router-link>
    <router-link :to="{ path: '/header' }">header</router-link>
    <router-link :to="{ path: '/switch' }">switch</router-link>
    <router-link :to="{ path: '/input-group' }">input-group</router-link>
    <router-link :to="{ path: '/icon' }">icon</router-link>
    <router-link :to="{ path: '/tab' }">tab</router-link>
    <router-link :to="{ path: '/tabbar' }">tabbar</router-link>
    <router-link :to="{ path: '/toast' }">toast</router-link>
    <router-link :to="{ path: '/confirm' }">confirm</router-link>
  </div>
</template>

<style scoped lang="scss">
  @import './style';
</style>

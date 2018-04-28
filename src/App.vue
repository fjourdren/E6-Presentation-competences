<template>
  <div id="app">
    <div class="container">
      <transition name="fade">
        <div class="row">
          <header class="col-lg-12 header">
            <div class="top text-center">

              <div class="row">
                <div class="col-lg-12">
                  <router-link :to="{ name: 'index' }"><img src="@/assets/logo.png" alt=""/></router-link>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <h1 class="nomPrenom"><router-link :to="{ name: 'index' }">{{ config.APP_NAME }}</router-link></h1>
                </div>
              </div>

            </div>

            <div class="row">
              <nav class="menu" role="navigation">
                <div class="text-center">
                  <div class="itemMenu">
                    <router-link v-bind:class="{ 'active': this.$route.name == 'Activites' || this.$route.name == 'Activite' }" :to="{ name: 'Activites' }">Activités</router-link>
                  </div>
                  <div class="itemMenu">
                    <router-link v-bind:class="{ 'active': this.$route.name == 'Situations' || this.$route.name == 'Situation' }" :to="{ name: 'Situations' }">Situations</router-link>
                  </div>
                  <div class="itemMenu">
                    <a target="_blank" href="synthese.pdf">Tableau de Synthèse</a>
                  </div>
                </div>
              </nav>
            </div>

          </header>
        </div>
      </transition>

      <div class="row">
        <div class="col-lg-12 page">
          <transition name="fade-left">
            <router-view></router-view>
          </transition>
        </div>
      </div>

      <transition name="fade">
        <div class="row">
          <div class="col-lg-12 footer text-center">
            <strong>Développé par <a target="_blank" href="https://github.com/fjourdren/">Flavien JOURDREN</a> - <a target="_blank" href="https://github.com/fjourdren/E6-Presentation-competences">Projet Github</a></strong>
          </div>
        </div>
      </transition>

    </div>

  </div>
</template>

<script>
import config from '../config'

export default {
  name: 'App',
  data: function () {
    return {
      config: config
    }
  },
  beforeCreate: function () {
    document.title = config.APP_NAME
  }
}
</script>

<style lang="scss">
  @import 'src/assets/scss/design.scss';
</style>
<template>
  <div class="situation">
    <Chargement v-if="situation === null"/>
    <h2 v-else-if="situation === -1">Erreur</h2>
    <div v-else>
      <h2 class="text-center"><u>{{ situation.name }}</u></h2>
      <img v-if="situation.image" :src="situation.image" class="center-block imgResized" alt=""/>
      <div v-if="situation.date">
        <u>Date de réalisation</u> : <div v-html="situation.date"></div>
      </div>
      <div v-if="situation.lieu">
        <u>Lieu</u> : <div v-html="situation.lieu"></div>
      </div>
      <div v-if="situation.context">
        <u>Contexte de la situation</u> : <div v-html="situation.context"></div>
      </div>
      <div v-if="situation.condition">
        <u>Condition de réalisation</u> : <div v-html="situation.condition"></div>
      </div>

      <hr/>

      <ActivitesList :activites="activites"/>

      <hr/>

      <PreuvesList :preuves="preuves"/>

    </div>
  </div>
</template>

<script>
import methodsMixinVue from '@/mixins/methodsMixin.vue'
import Chargement from '@/components/Chargement.vue'
import ActivitesList from '@/components/ActivitesList.vue'
import PreuvesList from '@/components/PreuvesList.vue'

export default {
  name: 'Situation',
  data: function () {
    return {
      situation: null,
      activites: null,
      preuves: null
    }
  },
  components: {
    'Chargement': Chargement,
    'ActivitesList': ActivitesList,
    'PreuvesList': PreuvesList
  },
  mounted: function(){
    this.situation = this.getSituationWithId(this.$route.params.situationId)
    this.activites = this.getActivitesDSituation(this.situation.id)
    this.preuves = this.getPreuvesDSituation(this.situation.id)
  },
  mixins: [methodsMixinVue]
}
</script>

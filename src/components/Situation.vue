<template>
  <div class="situation">
    <Chargement v-if="situation === null"/>
    <h1 v-else-if="situation === -1">Erreur</h1>
    <div v-else>
      <h1 class="text-center"><u>{{ situation.name }}</u></h1>
      <img v-if="situation.image" :src="situation.image" class="center-block imgResized" alt=""/>
      <p v-if="situation.description">Description : {{ situation.description }}</p>

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

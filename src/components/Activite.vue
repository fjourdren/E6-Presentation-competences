<template>
  <div class="activite">
    <Chargement v-if="activite === null"/>
    <h1 v-else-if="activite === -1">Erreur</h1>
    <div v-else>
      <h1 class="text-center"><u>{{ activite.name }}</u></h1>

      <SituationsList :situations="situations"/>

      <hr/>

      <PreuvesList :preuves="preuves"/>

    </div>
  </div>
</template>

<script>
import methodsMixinVue from '@/mixins/methodsMixin.vue'
import Chargement from '@/components/Chargement.vue'
import SituationsList from '@/components/SituationsList'
import PreuvesList from '@/components/PreuvesList.vue'

export default {
  name: 'Activite',
  data: function () {
    return {
      activite: null,
      situations: null,
      preuves: null
    }
  },
  components: {
    'Chargement': Chargement,
    'SituationsList': SituationsList,
    'PreuvesList': PreuvesList
  },
  mounted: function(){
    this.activite = this.getActiviteWithId(this.$route.params.activiteId)
    this.situations = this.getSituationsDActivite(this.activite.id)
    this.preuves = this.getPreuvesDActivite(this.activite.id)
  },
  mixins: [methodsMixinVue]
}
</script>

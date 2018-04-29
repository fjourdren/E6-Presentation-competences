<template>
    <div class="situationsList">
        <h3><u>Situations</u></h3>

        <div v-if="situations.length > 0" class="row">
            <div class="col-lg-12">
                <p>Recherche : <input v-model="search" placeholder="Recherche d'une situation"/></p>
                <table class="table">
                    <thead>
                    <tr>
                        <td scope="col">#</td>
                        <td scope="col">Nom</td>
                    </tr>
                    </thead>
                    <tbody v-for="situation in filteredSituations" v-bind:key="situation.id">
                        <MiniSituation :situation="situation"/>
                    </tbody>
                </table>
                <p>Recherche : <input v-model="search" placeholder="Recherche d'une situation"/></p>
            </div>
        </div>
        <div v-else class="text-center">
          <strong>Aucune situation</strong>
        </div>
    </div>
</template>

<script>
import MiniSituation from '@/components/MiniSituation.vue'

export default {
  name: 'SituationsList',
  components: {
    'MiniSituation': MiniSituation
  },
  data: function () {
    return {
      search: null
    }
  },
  props: ['situations'],
  computed: {
    filteredSituations() {
      if(this.search !== null) {
        return this.situations.filter(item => {
          if(item.name.toLowerCase().match(this.search.toLowerCase()))
            return item
        })
      } else {
        return this.situations
      }
    }
  }
}
</script>

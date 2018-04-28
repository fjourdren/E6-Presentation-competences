<template>
    <div class="activitesList">
        <h3><u>Activités</u></h3>

        <div v-if="activites.length > 0" class="row">
            <div class="col-lg-12">
                <p>Recherche : <input v-model="search" placeholder="Recherche d'une activité"/></p>
                <table class="table">
                  <thead>
                      <tr>
                        <th scope="col">Nom</th>
                      </tr>
                  </thead>
                  <tbody v-for="activite in filteredActivites" v-bind:key="activite.id">
                      <miniActivite :activite="activite"/>
                  </tbody>
                </table>
                <p>Recherche : <input v-model="search" placeholder="Recherche d'une activité"/></p>
            </div>
        </div>
        <div v-else class="text-center">
          <strong>Aucune activité</strong>
        </div>
    </div>
</template>

<script>
import MiniActivite from '@/components/MiniActivite.vue'

export default {
  name: 'ActivitesList',
  components: {
    'MiniActivite': MiniActivite
  },
  data: function () {
    return {
      search: null
    }
  },
  props: ['activites'],
  computed: {
    filteredActivites() {
      if(this.search !== null) {
        return this.activites.filter(item => {
          if(item.name.toLowerCase().match(this.search.toLowerCase()))
            return item
        })
      } else {
        return this.activites
      }
    }
  }
}
</script>

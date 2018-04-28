<template>
  <div class="activites">
    <ActivitesList :activites="activites"/>
  </div>
</template>

<script>
import data from '../data.json'
import ActivitesList from '@/components/ActivitesList.vue'

export default {
  name: 'Activites',
  components: {
    'ActivitesList': ActivitesList
  },
  computed: {
    activites() {
      return data.activites
    }
  }
}
</script>

<template>
  <div class="situations">
    <SituationsList :situations="situations"/>
  </div>
</template>

<script>
import data from '../data.json'
import SituationsList from '@/components/SituationsList.vue'

export default {
  name: 'Situations',
  components: {
    'SituationsList': SituationsList
  },
  computed: {
    situations() {
      return data.situations
    }
  }
}
</script>
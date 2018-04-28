<template>
  <transition name="fade-left">
    <tr class="miniActivite">
      <td v-if="nbPreuve > 0"><router-link :to="{ name: 'Activite', params: { activiteId: activite.id }}">{{ activite.name }}</router-link></td>
      <td v-else>{{ activite.name }}</td>
    </tr>
  </transition>
</template>

<script>
import methodsMixinVue from '@/mixins/methodsMixin.vue'

export default {
  name: 'miniActivite',
  props: ['activite'],
  mixins: [methodsMixinVue],
  data: function () {
    return {
      nbPreuve: 0
    }
  },
  mounted: function(){
    this.nbPreuve = this.getPreuvesDActivite(this.activite.id).length
  }
}
</script>

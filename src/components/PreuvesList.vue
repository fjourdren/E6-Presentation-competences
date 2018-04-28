<template>
    <div class="preuvesList">
        <h3><u>Preuves</u></h3>

        <div v-if="preuves.length > 0" class="row">
            <div class="col-lg-12">
                <div v-for="preuve in preuves" v-bind:key="preuve.id">
                    <MiniPreuve :preuve="preuve"/>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
          <strong>Aucune preuve</strong>
        </div>
    </div>
</template>

<script>
import MiniPreuve from '@/components/MiniPreuve.vue'

export default {
  name: 'PreuvesList',
  components: {
    'MiniPreuve': MiniPreuve
  },
  props: ['preuves']
}
</script>

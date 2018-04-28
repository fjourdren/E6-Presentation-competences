<template>
    <transition name="fade-left">
        <div class="miniPreuve">
            <h4>#{{ preuve.id + 1 }} - {{ preuve.name }}</h4>
            <div v-html="preuve.content"></div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'miniPreuve',
  props: ['preuve']
}
</script>
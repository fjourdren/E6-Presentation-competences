<template>
  <transition name="fade-left">
    <tr class="miniSituation">
      <th scope="row">{{ situation.id + 1 }}</th>
      <td><router-link :to="{ name: 'Situation', params: { situationId: situation.id }}">{{ situation.name }}</router-link></td>
      <td><small><i> ({{ situation.description }})</i></small></td>
    </tr>
  </transition>
</template>

<script>
export default {
  name: 'miniSituation',
  props: ['situation']
}
</script>
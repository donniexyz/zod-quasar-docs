<template>
  <div class="q-pa-md" style="max-width: 500px;">
    <q-toggle v-model="visible" label="Visible image" class="q-mb-md" />

    <q-slide-transition>
      <div v-show="visible">
        <img
          class="responsive"
          src="statics/img/quasar.jpg"
        >
      </div>
    </q-slide-transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="statics/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="statics/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="statics/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="statics/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1
    }
  }
}
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-img
        src="statics/img/image-src.png"
        srcset="statics/img/image-1x.png 300w,
                statics/img/image-2x.png 2x,
                statics/img/image-3x.png 3x,
                statics/img/image-4x.png 4x"
        style="height: 280px; max-width: 300px"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset
        </div>
      </q-img>

      <q-img
        src="statics/img/image-src.png"
        srcset="statics/img/image-1x.png 400w,
                statics/img/image-2x.png 800w,
                statics/img/image-3x.png 1200w,
                statics/img/image-4x.png 1600w"
        sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w"
        style="height: 280px; max-width: 300px"
      >
        <div class="absolute-bottom text-body1 text-center">
          With srcset & sizes
        </div>
      </q-img>
    </div>
  </div>
</template>

<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-tree
      :nodes="simple"
      node-key="label"
      :expanded.sync="expanded"
      dark
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      expanded: ['Satisfied customers (with avatar)', 'Good food (with icon)'],
      simple: [
        {
          label: 'Satisfied customers (with avatar)',
          avatar: 'statics/img/boy-avatar.png',
          children: [
            {
              label: 'Good food (with icon)',
              icon: 'restaurant_menu',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              icon: 'room_service',
              disabled: true,
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              icon: 'photo',
              children: [
                {
                  label: 'Happy atmosphere (with image)',
                  img: 'statics/img/logo_calendar_128px.png'
                },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-tree
      :nodes="simple"
      accordion
      node-key="label"
      :expanded.sync="expanded"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      ],
      expanded: ['Satisfied customers (with avatar)', 'Good food (with icon)']
    }
  }
}
</script>

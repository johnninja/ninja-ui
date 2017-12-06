<template>
  <button
    class='n-button'
    :class="[
      type ? 'n-button--' + type : '',
      size ? 'n-button--' + size : ''
    ]"
    :type='nativeType'
    :disabled='disabled'
  ><slot></slot></button>
</template>
<script>
  export default {
    name: 'n-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean
      },
      nativeType: {
      	type: String,
      	default: 'button'
      },
      size: {
      	type: String
      }
    }
  }
</script>
<template>
    <p class="font-10 white mb-1 uppercase">
        <span
        v-for="(item, index) in CurrentDir" :key="index"
        >
            <span v-if="index">&nbsp;>>&nbsp;</span>
            <a href="" class="white">{{item}}</a>
        </span>
    </p>
</template>

<script>
export default {
  props: {
    CurrentDir: {
      type: Array,
      required: true
    },
  }
}
</script>


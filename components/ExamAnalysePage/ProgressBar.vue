<template>
    <div class="progress-bar display-block bg-gray-3">
        <div class="progress-bar bg-primary white text-center-absolute font-15" style="height: 100%;" :style="{width: progress + '%'}">{{ progress + '%'}}</div>
    </div>
</template>

<script>
export default {
  props: {
    progress: {
        type: Number,
    },
  }
}
</script>

<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({$content, params}) {
      // const article = await $content('allExams', 'test').only([params.slug]).fetch()
      const article = await $content('allExams', params.slug).fetch()
      return { article }
    }
  }
</script>

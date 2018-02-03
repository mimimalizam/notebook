<template>
  <div id="notebook">
    <section class="main">
      <textarea v-model="content"></textarea>
    </section>

    <aside class="preview" v-html="notePreview">
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Notebook',
  data() {
    return {
      content: 'This is a note.',
    };
  },

  computed: {
    notePreview () {
      return marked(this.content)
    },
  },

  methods: {
    saveNote () {
      console.log('saving note:', this.content)
      localStorage.setItem("content", this.content)
    }
  },

  watch: {
    content: {
      handler: 'saveNote',
    },
  },

  created() {
    this.content = localStorage.getItem('content') || 'You can write in **markdown**'
  }
};
</script>

<style scoped>
</style>

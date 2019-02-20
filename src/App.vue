<template>
  <div id="app">
    <blog-header/>
    <router-view/>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
    AddBlog,
    ShowBlog,
    BlogHeader
  }
}
</script>

<style>
  
</style>

<template>
  <div id="show-blog" v-theme:column="'wide'">
    <h2>博客总览</h2>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link :to="'/blog/'+blog.id">
        <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
        <article>{{blog.content | ellipsis}}</article>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blog',
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  created(){
    /*this.$http.get('https://wd8555020183ufevfo.wilddogio.com/posts.json')*/
    axios.get('https://wd8555020183ufevfo.wilddogio.com/posts.json')
      .then((data)=>{
        var blogsArray = [];
        for(let key in data.data){
          // console.log(key);
          // console.log(data[key]);
          data.data[key].id = key;
          blogsArray.push(data.data[key]);
        }
        /*console.log(blogsArray);*/
        this.blogs = blogsArray;
        /*console.log(this.blogs);*/
      })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  filters:{
    /*"to-uppercase":function(value){
      return value.toUpperCase();
    }*/
    toUppercase(value){
      return value.toUpperCase();
    },
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 100) {
        return value.slice(0,100) + '...'
      }
      return value
    }
  },//局部添加过滤器
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
       el.style.color="#"+Math.random().toString(16).slice(2,8)
      }
    }
  }//局部自定义指令
}
</script>
<style scoped>
a{text-decoration:none;display:block;height:100px;}
#show-blog{
  max-width: 800px;
  margin:0 auto;
}

.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
  overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;
}
input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>

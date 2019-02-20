<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <p>作者：{{blog.author}}</p>
    <article>内容：{{blog.content}}</article>
    <p>分类:</p>
    <ul>
      <li v-for="category in blog.categories" :key="category">
        {{category}}
      </li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/' + id" class="btn-edit">编辑</router-link>
  </div>
</template>

<script>
import axios from 'axios'
  export default{
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id,
        blog:{}
      }
    },
    created(){
      axios.get('https://wd8555020183ufevfo.wilddogio.com/posts/' + this.id + ".json")
        .then((data)=>{
          this.blog = data.data;
        })
    },
    methods:{
      deleteSingleBlog(){
        axios.delete("https://wd8555020183ufevfo.wilddogio.com/posts/" + this.id + ".json")
                  .then(response =>{
                    this.$router.push({path:'/'})
                  })
      }
    }
  }
</script>
<style>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
  clear: both;
  overflow: hidden;
}
  button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  float:left;margin-right: 20px;
}
.btn-edit{
  display: block;
  margin: 20px 0;
  background:#1f90d8;
  color: #fff;
  border: 0;
  padding: 10px 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  float:left;
}
</style>
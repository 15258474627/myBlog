<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title">
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories">
        <label>node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label>react.js</label>
        <input type="checkbox" value="react.js" v-model="blog.categories">
        <label>angular4</label>
        <input type="checkbox" value="angular4" v-model="blog.categories">
      </div>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{author}}
        </option>
      </select>
      <button @click.prevent="post">编辑博客</button>
      <router-link :to="'/blog/' + id">
        <button class="close">取消编辑</button>
      </router-link>
    </form>
    <div v-if="submmited" id="preview">
      <h2>编辑博客成功！！</h2>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:{{blog.content}}</p>
      <ul>博客类别:
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <p>博客作者:{{blog.author}}</p>
      <router-link :to="'/blog/' + id">
        <button>确定</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'add-blog',
  data () {
    return {
      id:this.$route.params.id,
      blog:{},
      authors:["作者一","作者二","作者三","作者四"],
      submmited:false
    }
  },
  methods:{
    fetchData(){
      // console.log(this.id);
      axios.get('https://wd8555020183ufevfo.wilddogio.com/posts/' + this.id + ".json")
          .then(response => {
            //console.log(response.data);
            this.blog = response.data;
          })
    },
    post:function(){
      axios.put('https://wd8555020183ufevfo.wilddogio.com/posts/' + this.id + ".json",this.blog)
          .then((data)=>{
            //console.log(data);
            this.submmited = true;
          });
    }
  },
  created(){
    this.fetchData();
  }
}
</script>
<style scoped>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
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
button.close{
  background:#1f90d8;
}
label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}

textarea{
  height: 200px;
}

#checkboxes label{
  display: inline-block;
  margin: 15px 0;
}

#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
#preview ul{
  padding:0;
}
#preview ul>li{
  margin-left:30px;
}

h3{
  margin-top: 10px;
}
</style>

<template>
<div class="hello">
   <div class="container">
       <div class="content">
           <div class="row">
               <div class="col-md-12">
                   <div class="myheader">
                       <h2>This is the main page</h2>
                   </div>
                   
               </div>
           </div>

           <div class="row">
               <div class="col-md-1"></div>
               <div class="col-md-10">
                   <div class="form-group">
                       <label for="">Blog Topic:</label>
                       <div class="form-line">
                           <input type="text" class="form-control" v-model="blogTopic" id="blogTopic" placeholder="Topic" v>
                       </div>
                   </div>

                   <div class="form-group">
                        <label for="">Blog Post</label>
                        <!-- this is where the key on should go. try the first method  -->
                        <textarea class="form-control" v-model="blogPost" id="blogPost" rows="5" placeholder="what's are you writing today?"></textarea>
                    </div>
                    <button type= "button" class="btn btn-primary" @click="savePost" style="margin-right: 10px"> Post </button>
                    <!-- check this functionality when you get home and compare with the same one from todo app used in the api pagination -->
                    <p>you have {{strLength}} words in your post</p>
               </div>
           </div>

           <div class="row">
               <div class="col-md-1"></div>
               <div class="col-md-10 routers">
                   <router-link :to="{name:'ReadPost'}">view blog posts</router-link>
                    <router-link style="margin-left:16px;" :to="{name:'viewPost'}">my posts</router-link>
                    <!-- this is the router for the punchin -->
                    <router-link style="margin-left:16px;" :to="{name:'punches'}">Profile</router-link>
               </div>
           </div>
           
       </div>
   </div>
    
</div>
</template>

<script>
export default ({
    props:{
        posts: String
    },
    data(){
        return{
            text: "What would like to learn?",
            id: 0,
            blogTopic:'',
            blogPost:'',
            statuts: 0, //for the like when I work on the logic 
            reads:[],
            strLength:0,
        }
    },
    mounted(){
      if(localStorage.getItem('blogs')){
          this.reads = JSON.parse(localStorage.getItem('blogs'));
      }
    },
    methods:{
        savePost(){
            this.id+=1;
                this.reads.push({
                    id: this.id,
                    blogTopic: this.blogTopic,
                    blogPost:this.blogPost,
                    status:this.status
                  })
                localStorage.setItem('blogs', JSON.stringify(this.reads));
                // our attempt at checking the output
                console.log(this.blogPost.split(" "))
                console.log("I got here")
                this.strLength = this.blogPost.split(" ").length
                console.log(this.strLength)        
        },
        saveBlog(){
            const parsed = JSON.stringify(this.reads);
            localStorage.setItem('blogs', parsed)
        }

    }
    
})
</script>

<style>
.form-control{
    min-width: 20px;
}
h2{
    text-align: center;
    color:#fff;
    font-weight:bold;
}
button{
    width:110px;
}
.container{
    background-color: rgba(0,0,0,0.2);
    min-height: 500px;
    padding-top:60px;
    border-radius: 20px;
    color:#fff;
    padding-bottom:30px;
}
.routers{
    padding-top:50px;
}
.routers a{
    color:#fff;
}
.myheader{
    width:500px;
    background-color:  rgba(41, 23, 23, 0.3);
    padding:5px;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 50px;
    box-shadow:0 1px 2px #000;
}


</style>
<template>
    <div>
        <div class="container">
            <div class="content">
        <div class="row">
            <div class="col-md-12" style="padding:10px; border-radius:30px">
                <div class="row">
                    <div class="col-md-12" style="background-color:#87656E ;padding:10px; border-radius:30px">
                        <div class="row">
                            <div class="col-md-4" v-for="name in info" v-bind:key="name.title" style="">
                                <div class="card text-center border-dark" style="min-height:450px;margin-bottom:20px; border-radius:30px">
                                    <div style="text-align:center;padding-top:20px;">
                                        <img class="card-img-top" style="width:100px;" :src="name.urlToImage" alt="Card display picture">
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title"> {{name.title}}</h3>
                                        <p><br>{{name.source.name}}<br>{{name.author}}<br>{{name.id}}<br>{{name.name}}
                                        <br>
                                        <a :href="name.url"> read post</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <router-link :to="{name:'home'}"><button type= "button" class="btn btn-primary"> Home </button></router-link>
                </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            info:null,
            endPoint:'https://newsapi.org/v2/everything?q=bitcoin&apiKey=ccb84c98ffa94b32b0b2df98e09380a6',
            source:'',
            author:'',
            title:'',
            description:'',
            url:'',
            urlToImage:'',
            id:'',
            name:''
        }
    },
    mounted(){
        this.axios.get(this.endPoint)
        .then(response=>{
            this.info = response.data.articles;
        })
    }
    
    
}
</script>

<style scoped>
.card{
    background-color:#e9cddd;
}
button{
    align-content: center;
}
</style>
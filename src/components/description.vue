<template>
    <div>
        <!-- this file should contain the description for the clicked  -->
        <div class="jumbotron" style="background-color:plum; border-radius: 30px; " >
                <h1 style="font-family: Times New Roman, Times, serif;"><p>{{item.name}}</p></h1>
        </div>
        <hr>
        <h2 style="font-family: Lucida Console, Courier, monospace; color: black"> description: </h2>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6 description">
                 {{item.description}}
                 <hr>
                 <!-- see the v-if used here and how and take note of the same  -->
                 <div class="btn btn-warning" style="width:120px;" v-if="item.status===0">Pending</div>
                  <div class="btn btn-primary" style="width:120px;" v-if="item.status===1">Active</div>
                   <div class="btn btn-success" style="width:120px;" v-if="item.status===2">Completed</div>
                
                 <hr>

            <button @click.prevent="goBack()" class="btn btn-info">Back</button> 
            </div>  
        </div> 
    </div>
</template>
<script>
export default {
    mounted(){
        // is this the array call from the local storage?
        // this method is to contain the find item for the array 
        let items=JSON.parse(localStorage.getItem('lists'));
        let item=items.find(data=>parseInt(data.id)===parseInt(this.id));
        if(item){
             this.item=item;
        }
       
        console.log(this.item);
    },data(){
        return {
            // this is the router info right here
            id:this.$route.params.id,
            item:{}
        }
    },
    // this is a method for the goback used in the quicker method above.
    methods:{
        goBack(){
            this.$router.go(-1);
        },
    }
}
</script>

<style scoped>
.description{
    background: plum;
    background-attachment: fixed;
    min-height: 200px;
    border-radius: 15px;
    box-shadow: 0 1px 2px rgb(51, 49, 49);
    padding:10px;
}
 

</style>
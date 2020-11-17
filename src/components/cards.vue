<!-- this the cards display page for the  informaton from the api -->

<template>
<div >
    <h1>User info in cards </h1>
<!-- {{info}} -->
<div class="row">
    <div class="col-md-12">
         <div>
                    <!-- this is for the select variable  -->
                    <div class="btn-group">
                        <!-- the load page method is called here -->
                        <select class="form-control" v-model="perPage" @change="loadPage()">
                            <option value="1">1</option>
                             <option value="2">2</option>
                              <option value="3">3</option>
                               <option value="4">4</option>
                                <option value="5">5</option>
                                 <option value="6">6</option>
                        </select>
                    </div>
                </div>
    </div>

</div>
    <div class="row">
        <div class="col-md-12" style="background-color:#CECCFF;padding:20px; border-radius:30px">
            <div class="row">
               
                <div class="col-md-4" v-for="name in info" v-bind:key="name.id" style="padding:30px;">
                    <div class="card text-center border-dark mb-3" style="margin-right: 30px; background-color:#FFCCD6; max-width: 18rem; border-radius:30px">
                        <div style="text-align:center;padding-top:20px;">
                            <img class="card-img-top" style="width:100px;" :src="name.avatar" alt="Card display picture">
                        </div>
                    
                        <div class="card-body">
                            <h3 class="card-title"> User Info</h3>
                            <p> email:{{name.email}}<br> full name:{{name.first_name}} {{name.last_name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        <button @click.prevent="goBack()" class="btn btn-info" style="padding: 10px; border-radius: 10px; margin-right: 40px;"><h6>Go Home </h6></button>

        <!-- button for the add individual modal -->
        <button type= "button" class="btn btn-link" style="border-radius: 10px; padding: 10px; margin-right: 20px" data-toggle="modal" data-target="#ApiForm"><h6>Add Individual </h6></button>
        <!-- pagination enters here -->
        <nav aria-label="Page navigation example" class="pull-right">
            <ul class="pagination justify-content-end" style="margin-left: 20px; " >
                    <li class="page-item" style="background: rgb(0, 176,228); color: rgb(255,255, 255);"  >
                        <button class="btn btn-default" :disabled="parseInt(page) === 1" @click="prevPage()">Previous</button>
                    </li>
                <li class="page-item">
                    <a class="page-link" href="#">{{page}} of {{total_pages}}</a>
                    </li>
                <li class="page-item" style="background: rgb(0,176,228); color: rgb(255,255, 255)">
                    <button class="btn btn-default" :disabled="parseInt(page) === total_pages" @click="nextPage()">Next</button>
                    </li>
            </ul>
        </nav>
  </div>
        </div>
        <div class="col-md-12" style="min-height:200px; background-color:gray;">
        </div>

        <!-- Modal for new individual-->
            <div class="modal fade" id="ApiForm" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Individual</h5>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                    <input type="text"  v-model="first_name" id="FirstName" class="form-control" placeholder="First name">
                    </div>
                    <div class="form-group">
                    <input class="form-control" v-model="last_name" type="text" id="lastname"  placeholder="last name">
                    </div>
                    <div class="form-group">
                    <input  type="email" id="Email"  v-model="email" class="form-control" placeholder="Email: foo@example.com">
                    </div>
                    <div class="file-field">
                    <div >
                        <input   type="file"  @change="imageUpload">
                        <button class="btn btn-primary btn-sm float-left" @click.prevent="">upload file</button>
                    </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent=" dataInput()" >Add</button>
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
            first_name:'',
            last_name:'',
            email:'',
            avatar:null,
            data:[],
            baseUrl:'https://reqres.in/api/users',
            page:1,
            perPage:2,
            total_pages:0
        }
    },
    mounted(){
        //this first line is a call to the method created as loadPage, to implement the pagination and all the api calls 
        this.loadPage();
        console.log(this.axios)
    },
    methods:{
        // this is part of the pagination methods
        nextPage(){
            this.page+=1;
            this.loadPage();
        },
        displayCards(){
            this.cards
        },
        prevPage(){
            this.page-=1;
            this.loadPage();   
        },
        // this method below is used for the load page. it called @click in the select tag in the template above. 
        loadPage(url=`${this.baseUrl}?page=${this.page}&per_page=${this.perPage}`){
            // the api call to get the data from the api. 
            this.axios.get(url)
            .then(response => {
                console.log(response.data)
                this.info = response.data.data;
                this.total_pages=response.data.total_pages;
            }).catch(error=>{
                console.log(error);
            })
        },
        // the router function here
        goBack(){
            this.$router.go(-1);
        },
        dataInput(){
            this.id+=1;
            let data={
                id: this.id,
                first_name: this.first_name,
                last_name: this.last_name,
                email:this.email,
                avatar:this.avatar
              };
              const formData= new FormData();
              formData.append('first_name',this.first_name);
              formData.append('last_name',this.last_name);
              formData.append('email',this.email);
         
            this.axios.post('https://reqres.in/api/users', data)
            .then(function (response) {
                console.log (response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
            },
        imageUpload(event){
            this.avatar = event.target.files[0];
        }
    }
    
}
</script>

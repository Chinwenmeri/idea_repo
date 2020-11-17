<template>
    <!-- this is the page for the punchin -->
    <!--design a quick sign in page   -->
    <div>
        <div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="myheader">
                            <h3> Punch-in page </h3>         
                        </div>

                        <div class="row"> 
                            <div class="col-md-1"></div>
                            <div class="col-md-10">
                                <div class="form-group">
                                    <label for="">Email:</label>
                                    <div class="form-line">
                                        <input type="email" class="form-control" v-model="userInfor.email" id="blogTopic" placeholder="example: 123@email.com" required>
                                    </div>
                                </div>

                                <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control" v-model="userInfor.password" id="blogPost" rows="5" placeholder="Enter password ">
                                    </div>
                                    <!-- in the main function us a notification popup for the 
                                    there is no serious matter here on the click simply send data into the local storage and enter  -->
                                    <router-link :to="{name:'home'}"><button type= "button" class="btn btn-primary" style="margin-right: 10px" @click="SigninInfo">punch in</button></router-link>
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
    // define data 
    // push the data and input to local storage
    //how possible is it to use the data in another page? do it there.
    
    data(){
        return{
            Email: '',
            Password: '',
            userInfor: {
                email:'',
                password:''
            }
        }
    },
    mounted(){
     
    },
    
    methods:{
        SigninInfo(){
            localStorage.setItem('Info', JSON.stringify(this.userInfor));       
        },
        saveInfo(){
            const parsed = JSON.stringify(this.userInfor);
            localStorage.setItem('Info', parsed)
        }

    }    
}
</script>

<style>
body{
    background-image: url("signup-bg.jpg");
}

.form-control{
    min-width: 20px;
}

h3{
    text-align: center;
    color:rgba(252, 246, 246, 0.308);
    font-weight:bold;
}

.container{
    background-color: rgb(144, 145, 141);
    width: 350px;
    min-height: 300px;
    padding-top:60px;
    border-radius: 20px;
    color:#fff;
    padding-bottom:30px;
}

</style>
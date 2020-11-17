<template>
    <div>
        <div class="jumbotron" v-if="parseInt(login.status) === 1">
            <div class="userName">
                {{userData.email}}
                <div style='font-size: 15px;'>
                    {{login.punch_in_time}}
                </div>
            </div>
                
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Notes:</label>
                <input class="form-control" id="Notes" rows="6" placeholder="Enter your note." v-model="login.note">
            </div>
            <p class="lead" >
                <!-- this should serve as the router to the  -->
                <button type= "button" class="btn btn-primary" style="margin-right: 10px" @click.prevent="noteSave()">punch in</button>
            </p>
            <!-- {{this.login.note}}
            {{this.login.punch_in_time}} -->
            <div class="col-md-12" >
                <div>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Note</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                            <tbody>
                                <div v-for="(punch,i) in at_punchin" :key="i">
                                <tr>
                                <td>{{punch.login.note}}</td>
                                <td>{{punch.login.punch_in_time}}</td>
                                </tr>
                                </div>
                            </tbody>
                        </table>
                </div>  
            </div>
        </div>
        <div v-if="parseInt(login.status) === 0">
            <div class="jumbotron">
                    <div class="userName">
                        {{userData.email}}
                        <div style='font-size: 15px;'>
                            {{login.punch_in_time}}
                        </div>
                        </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Achievements:</label>
                <input class="form-control" id="Notes" rows="6" placeholder="Enter your note." v-model="logout.achievements">
            </div>
            <p class="lead">
                <!-- this should serve as the router to the  -->
                <button type= "button" class="btn btn-primary" style="margin-right: 10px" @click.prevent="noteWork">Add Achievements</button>
                <!-- router button to go back to the punchin page after punchout -->
                <button type= "button" class="btn btn-success" style="margin-right: 10px" @click="goBack">punch out</button>
            </p>
            <div class="col-md-12" >
                <div>
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Achievement</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                            <tbody>
                                <div v-for="(punchout,i) in at_punchout" :key="i">
                                <tr>
                                <td>{{punchout.logout.achievements}}</td>
                                <td>{{punchout.logout.punch_out_time}}</td>
                                </tr>
                                </div>
                            </tbody>
                        </table>
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
            login:{
                status:1,
                note:'',
                punch_in_time:new Date()
                
            },
            logout:{
                achievements:'',
                punch_out_time:''
            },

            at_punchin:[],
            at_punchout:[]
        }
    },

    mounted(){
        // console.log(this.login)
        if(localStorage.getItem('login')){
            this.at_punchin = JSON.parse(localStorage.getItem('login'));}
        else{
            this.at_punchout = JSON.parse(localStorage.getItem('logout'));
        }
        // console.log('time stamp ', new Date.now())
    },
    
    computed:{
        userData(){
            console.log('my info',this.$store.state.user)
            return this.$store.state.user
        }
    },

    methods:{
        noteSave(){
                this.login.status=0;
                this.login.punch_in_time = new Date()
                this.at_punchin.push({
                    login:this.login
                })  
                console.log(this.at_punchin)
                localStorage.setItem('login', JSON.stringify(this.at_punchin));
        },
        noteWork(){
            this.logout.punch_out_time = new Date()
            this.at_punchout.push({
                    logout:this.logout
                }) 
            localStorage.setItem('logout', JSON.stringify(this.at_punchout));       
        },
        goBack(){
            this.login.status=1;    
        },
    }
}
</script>
<style>
.userName{
    text-align: right;
    font-size: 25px;
    font-weight: bold;
}
</style>


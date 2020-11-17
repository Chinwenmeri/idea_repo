<template>
    <div>
        <!-- use punchin button as a router to the punchout page -->
        <div class="jumbotron">
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Achievements:</label>
                <input class="form-control" id="Notes" rows="6" placeholder="Enter your note." v-model="accomplishments">
            </div>
            <p class="lead">
                <!-- this should serve as the router to the  -->
                <button type= "button" class="btn btn-primary" style="margin-right: 10px" @click.prevent="noteWork">Add Achievements</button>
                <!-- router button to go back to the punchin page after punchout -->
                <button type= "button" class="btn btn-success" style="margin-right: 10px" @click="goBack">punch out</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            accomplishments:' ',
            work_done:[]
        }
    },

    mounted(){
      if(localStorage.getItem('Achievements')){
          this.work_done = JSON.parse(localStorage.getItem('Achievements'));
      }
    },

    methods:{
        noteWork(){
            this.work_done.push({
                accomplishments: this.accomplishments
                })
                localStorage.setItem('Achievements', JSON.stringify(this.work_done));      
        },
        goBack(){
            this.$router.push({name:'punches'});
        },
        saveWork(){
            const parsed = JSON.stringify(this.work_done);
            localStorage.setItem('Achievements', parsed)
        }
    }
    
}
</script>
<template>
  <div class="hello">
      <div class="container">
          <div class="content">
              <section class="head">
                  <div class="row">
                      <div class="col-md-12">
                          <h1>{{ tasks }}</h1>
                      </div>
                      <div>
                      </div>
                  </div>
              </section>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                New Task
                </button>
                <!-- using the increment and decrement methods from here 
                thsi method uses the vuex right here-->
                 <button type="button" class="btn btn-primary"  @click="increment()">+</button>
                 <button type="button" class="btn btn-primary" @click="decrement()">-</button>
                <router-link :to="{name:'cards'}"><p>view cards</p></router-link>

                <!-- this is the local dat manipulation area -->
              <section class="main-body" >
                  <div class="card" style="heigth: 90px margin-left: 50 px; background-color: #FAEDAF; border-radius: 30px;">
                      <div class="card-body">
                          <div class="row">
                              <div class="col-md-12" v-for="(item,i) in items" :key="i"> 
                                  <div class="row">
                                            <div class="col-md-8">
                                                <label for=""><router-link :to="{name:'description',params:{id:item.id}}">{{item.name}}</router-link></label>
                                            </div>
                                      <div class="col-md-4">
                                        <div class="form-group">
                                            <!-- take note of the inital for loop called at the begining of this section -->
                                            <select v-model="item.status" style="margin-right:30px; width:120px; padding:5px; border border-primary" @change="changeStatus(i)">
                                                <option v-for="option in options" :key="option.text" v-bind:value="option.value">
                                                    {{ option.text }}
                                                </option>
                                        </select>
                                    <button class="btn btn-outline-danger" style="margin-right:25px; width:90px; padding: 2px;" data-toggle="modal" @click="openModal(i)">Delete Task</button>
                                    </div>
                                    <!-- <div class="btn btn-outline-info" style="margin-right;width:90px; padding:2px;" data-toggle="modal" data-target="#checkTaskCompletion">Completed</div> -->
                              </div>
                          </div>
                      </div>
                  </div>
                      </div>
                  </div>  
                  <button type="button" class="btn btn-primary" style="margin-left:300px">{{this.$store.state.count}}</button> 
              </section>
          </div>
      </div>
      <!-- modal for deleting the item  -->
      <div class="modal" id="deleteTask" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirm delete</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        <div class="modal-body">
            <p>Are you sure you want to delete?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="delTask(index)">Yes</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>
        </div>
    </div>
  </div>
</div>
<!-- modal for status change -->
 <div class="modal" id="statusModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Status Change</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
        <div class="modal-body">
            <p>Are you sure you want to update status?</p>
        </div>
        <div class="modal-footer">
            <!-- a call to the do update is shown here -->
            <button type="button" class="btn btn-secondary" @click="doUpdate()">Yes</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">No</button>
        </div>
    </div>
  </div>
</div>

            <!-- Modal for activity input-->
            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Tasks</h5>
                </div>
                <div class="modal-body">
                     <div class="form-group">
                    <label for="Todo tasks" aria-placeholder="new task ">New Tasks: </label>
                    <input v-model="name" type="text" id="Todo tasks" class="form-control" placeholder="Enter new task">
                </div>
                <div class="form-group">
                    <label for="Todo tasks" placeholder="Describe">Description: </label>
                    <textarea class="form-control" rows= "5" v-model="description" type="text" id="Todo tasks description"  placeholder="Describe task"></textarea>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="greet()">Add Task</button>
                </div>
                </div>
            </div>
            </div> 
  </div>
</template>

<script>

export default({
  props: {
    tasks: String
  },
    data() {
      return {
            text:"Add task?",
            id: 0,
            name:'',
            status: 0,
            options:[
                {text: 'pending', value: 0},
                {text: 'Active', value: 1},
                {text: 'Completed', value: 2}],
            description:'',
            items:[],
            completedTasks:[],
            index:'',
            isLoading:false,
            fullpage: true
            } 
      },
    mounted(){
      if(localStorage.getItem('lists')){
          this.items = JSON.parse(localStorage.getItem('lists'));
      }
  },
    methods:{
        // this increment makes a call to the vuex increment component
        increment(){
            this.$store.commit('increment')
            this.$store.state.count
            // console.log(this.$store.state.count)
        },
        decrement(){
            this.$store.commit('decrement')
            this.$store.state.count
            // console.log(this.$store.state.count)
        },
        // this is for the doUpdate, it saved and changes the 
        doUpdate(){
            localStorage.setItem('lists', JSON.stringify(this.items));
            this.items = JSON.parse(localStorage.getItem('lists'));
            $('#statusModal').modal('hide');
            this.$notify({
                title: 'Status update',
                message: 'status change was successful',
                type:'success',
                verticalAlign: 'top',
                horizontalAlign: 'center',
                close:'false',
                width:'500px',
                allow_dismiss:'false'
            })
        },
        // the change status method that works to update the status 
        changeStatus(i){
            this.index=i;
            $('#statusModal').modal('show');
        },
        //this is where we stopped yesterday as we tried to work on the jquery feature.
        openModal(i){
            this.index=i;
            $('#deleteTask').modal('show');
        },
        greet(){
            this.id+=1;
            this.items.push({
              name: this.name,
              id: this.id,
              description:this.description,
              status:this.status
              })
              localStorage.setItem('lists', JSON.stringify(this.items))
              //try and add the loading screen here and see. adding a new method makes no sense
            this.$notify({
                title: 'Add Task',
                message: 'Task was successfully addedd',
                type:'success',
                verticalAlign: 'top',
                horizontalAlign: 'center',
                close:'false',
                width:'500px',
                allow_dismiss:'false'
            })
            let loader = this.$loading.show({
                container: this.fullpage ? null : this.$refs.formcontainer,
               
            });
            setTimeout(()=>{
                loader.hide()
            },1000)
        },
        persist(){
            localStorage.items = this.items
        },
        marked:function(complete){
            console.log(complete)
            complete.status=1
            if(complete){
                alert('Task Is completed')
            }
          },
        delTask(i){
            //var index = this.items.indexOf(items)
            this.items.splice(i, 1);
            this.saveItems();

            let loader = this.$loading.show({
                container: this.fullpage ? null : this.$refs.formcontainer,
               
            });
            setTimeout(()=>{
                loader.hide()
            },1000)
            },
        saveItems(){
            const parsed = JSON.stringify(this.items);
            localStorage.setItem('lists', parsed)
        },  
    },
    computed:{
        count(){
        return this.$store.state.count 
        }}    
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* body{
    }
    /* background-color: #3DA7D9; */
    
    h1{
        text-align: center;
    }
    .main-body{
        text-align: left;
    }
input{
    border: 1px solid gray;
    color: brown;
}
    button{
        right: 50px;
        color: darkblue;
        border: 1px solid gray
    }

ul{
    list-style-type:none;
}
li{
    border: 1px solid white;
    font-family: 'Times New Roman', Times, serif;
    padding: 15px 25px 15px 25px;
}
</style>

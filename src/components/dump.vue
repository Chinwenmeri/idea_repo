<p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>



    h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

<h5>Workthrough tutorials<input type="checkbox"></h5>
                <h5>Work on Vue<input type="checkbox"></h5>
                <h5>Finish work on todo ui mock<input type="checkbox"></h5>
                <h5>think and eat by 1<input type="checkbox"></h5>
                <h5>work on some more thngs when i get back<input type="checkbox"></h5>
                <h5>meeting by 2<input type="checkbox"></h5>

<!-- <ul id="activites">
                            <li v-for="(item,i) in items" :key="i">
                                <input type= "checkbox" id="completed" v-on:click="marked(item)">
                                <span v-if="item.status == 0"> {{item.name}} </span>
                                <span v-else><s>{{item.name}}</s>
                                <button @click="delTask(i)">Delete Task</button>
                                </span>
                                
                            </li>
                        </ul> -->



                                <!--<form>
            <label for="additem">Add task:</label>
            <input v-model="name" placeholder="new task" value="name">
            <button  v-on:click.prevent='greet'> Add Task</button> 
         Button trigger modal 
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" v-on:click.prevent="greet">
        Add Task 
        </button>-->
        

        
        <!-- Modal 
        <div class="modal fade" id="addTaskHere" tabindex="-1"  aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header text-center">
                <h5 class="modal-title w-100 font-weight-bold" >Add Task</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div>
            <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="Todo tasks" aria-placeholder="new task ">New Tasks: </label>
                    <input v-model="name" type="text" id="Todo tasks" class="form-control" placeholder="Enter new task">
                </div>
                <div class="form-group">
                    <label for="Todo tasks" placeholder="Describe">Description: </label>
                    <input v-model="description" type="text" id="Todo tasks description" class="form-control" placeholder="Describe task">
                </div>
                    <button type="button" class="btn btn-primary" @click="greet()" data-dismiss="modal">Save changes</button>
            </form>
            </div>
            </div>
            </div>     --> 



            <!-- $('#myModal').modal('show'); -->


             <!--this is part of a loading overlay function 
                // canCancel: true,
                // onCancel: this.onCancel,


                        // doLoad(){
                        //     this.isLoading = true;
                        //     setTimeout(()=>{
                        //         this.isLoading = false
                        //     }, 5000)
                        // },
                        // onCancel(){
                        //     console.log('User cancelled the loader. ')
                        // },


                      class="form-control" id="exampleFormControlSelect1"


                      <nav aria-label="Page navigation example" style="border-radius:30px;">
                <ul class="pagination justify-content-end">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>

            <!--// color="#E3CB30"
            :particleOpacity="3"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#E3CB30"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"-->
      <!--
       <Particles
            id="tsparticles"
      :options="{
            background: {
                color: {
                    value: '#0d47a1'
                }
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push'
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: '#ffffff'
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        }"
            />
      --> 
<template>
    <div>
        <section class="main-body" >
                  <div class="card" style="heigth: 90px margin-left: 50 px; background-color: #FAEDAF; border-radius: 30px;">
                      <div class="card-body">
                          <div class="row">
                              <div class="col-md-12" v-for="(blog,i) in reads" :key="i"> 
                                  <div class="row">
                                            <div class="col-md-8">
                                                <button type="button" class="btn btn-primary" @click="loadBlog(blog)">   
                                                <label>{{blog.blogTopic}}</label>
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>  
              </section>
              <!-- this is supposed to be the modal called when the button is clicked  -->
              <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{{blog.blogTopic}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div class="modal-body">
                        {{blog.blogPost}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <!-- the modal button for the details page -->
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalLong">
                        Details
                        </button>
                        <!-- <button type="button" class="btn btn-secondary" @click="delPost(i)" data-dismiss="modal">Delete</button> -->
                    </div>
                    </div>
                </div>
                </div>
                <!-- the details modal -->
                <div class="modal fade" id="ModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Details of post</h5>
                        </div>
                        <div class="modal-body">
                            <table class="table table-sm table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">Word</th>
                                    <th scope="col">Number of Appearances</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <div v-for="(word,i) in wordCount" :key="i">
                                    <tr>
                                    <td>{{word[0]}}</td>
                                    <td>{{word[1]}}</td>
                                    </tr>
                                    </div>
                                </tbody>
                                </table>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
        <router-link :to="{name:'home'}"><button type= "button" class="btn btn-primary"> Home </button></router-link>
    </div>
</template>

<script>
export default {
    //TODO:work on retrieving data from the local storage
    mounted(){
        console.log('Im here');
            let item=localStorage.getItem("blogs");
            if(item){
                this.reads = JSON.parse(item);
                console.log(this.reads);
            }
      },
      data(){
          return{
              reads:[],
              blog:{},
              wordCount: [],
              numOfWOrd:0,
              words:" ",
              count:" "

          }
      },
      methods:{ 
          loadBlog(blog){
                this.blog=blog;
                $('#exampleModalLong').modal('show');
                blog.blogPost.split(" ").forEach((word)=>{
                    const numberOfOccurences = blog.blogPost.match(new RegExp(word, "g")).length
                    this.count = `${word} : ${numberOfOccurences}`
                    this.words = `${word}`
                    this.numOfWOrd = `${numberOfOccurences}`
                    this.wordCount.push(this.count.split(':'))
                })
                    // console.log(this.wordCount)
          },
          delPost(i){
            //var index = this.items.indexOf(items)
            this.reads.splice(i, 1);
            this.saveItems();
          }
      }
    }

</script>
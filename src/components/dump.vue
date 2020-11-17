<div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-md-12" style="background-color:#CECCFF;padding:20px; border-radius:30px">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-4" v-for="name in info" v-bind:key="name.title" style="padding:30px;">
                                    <div class="card text-center border-dark mb-3" style="margin-right: 30px; background-color:#FFCCD6; max-width: 18rem; border-radius:30px">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>

                                    <table class="table table-sm table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">Word</th>
                                    <th scope="col">Appearances</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    </tr>
                                </tbody>
                                </table>


                                // this is an npm function for the number of occurence problem 
                                // // console.log("in the counter function here ")
                                    // this.wordCount.push(blog.blogPost.split(' '))
                                    // console.log(this.wordCount)
                                    // this is the method that works 

                                    {{ new Date() | moment("h:mm:ss a") }}
            <div>
                <span>
                    {{ new Date() | moment("dddd, MMMM Do YYYY") }}
                </span>
            </div>
            <div class="navbar-brand">
    <a
      class="navbar-item"
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab js-logo fa-vuejs fa-2x" aria-hidden="true" />
    </a>
    <div class="navbar-item nav-home">
      <span class="tour">TOUR</span>
      <span class="of">OF</span>
      <span class="heroes">HEROES</span>
    </div>
    <button
      class="link navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>
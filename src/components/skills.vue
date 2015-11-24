<template>
  <section id="skills" class="skills-section">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                <!-- Tabs -->
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#frontend" aria-controls="frontend" role="tab" data-toggle="tab">Front-end</a></li>
                  <li role="presentation"><a href="#backend" aria-controls="backend" role="tab" data-toggle="tab">Back-end</a></li>
                  <li role="presentation"><a href="#mobile" aria-controls="mobile" role="tab" data-toggle="tab">Mobile</a></li>
                </ul>

                <!-- Tabs content -->
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane fade in active" id="frontend">
                    <div class="row">
                      <div class="container">
                        <div class="col-md-7">
                          <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                              <span class="sr-only">40% Complete (success)</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                              <span class="sr-only">20% Complete</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                              <span class="sr-only">60% Complete (warning)</span>
                            </div>
                          </div>
                          <div class="progress">
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                              <span class="sr-only">80% Complete (danger)</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="jumbotron">
                            <h3>Hello, world!</h3>
                            <p>...</p>
                            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="backend">...</div>
                  <div role="tabpanel" class="tab-pane fade" id="mobile">...</div>
                </div>
              </div>
          </div>
      </div>
  </section>
</template>

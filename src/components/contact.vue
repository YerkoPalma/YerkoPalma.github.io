<template>
  <section id="contact" class="contact-section">
      <div class="container">
          <div class="row">
            <h1>Contacto</h1>
              <div class="col-md-8 col-md-offset-2">
                <form class="contact-form" action="https://formspree.io/yerko.palma@usach.cl" method="POST">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                      <input type="text" class="form-control" name="nombre" placeholder="Nombre">
                    </div>
                    <div class="col-md-6">
                      <label>Email</label>
                      <input type="email" class="form-control" name="_replyto" placeholder="Mail">
                      <input type="text" name="_gotcha" style="display:none" />
                    </div>
                  </div>
                  <label>Message</label>
                  <textarea class="form-control" rows="4" placeholder="Cuentame que necesitas..." name="mensaje"></textarea>
                  <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                      <button type="submit" class="btn btn-danger btn-block btn-lg btn-fill">Enviar mensaje</button>
                    </div>
                  </div>
                </form>
              </div>
          </div>
      </div>
  </section>
</template>

<template>
  <section id="services" class="services-section">
    <h1>¿Qué hago?</h1>
      <div class="container">
          <div class="row">
              <div class="col-lg-3">
                  <slot name="design"></slot>
              </div>
              <div class="col-lg-3">
                  <slot name="develop"></slot>
              </div>
              <div class="col-lg-3">
                  <slot name="mobile"></slot>
              </div>
              <div class="col-lg-3">
                  <slot name="tech"></slot>
              </div>
          </div>
      </div>
  </section>
</template>

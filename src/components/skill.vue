<template>
  <div role="tabpanel" class="tab-pane fade in active" v-bind:class="{'in' : $index === 0, 'active' : $index === 0}" id="{{skillId}}">
    <div class="row">
      <div class="container">
        <div class="col-md-7">

          <template v-for="group in groups">
            <p class="text-left">Js-Dom</p>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                <span class="sr-only">40% Complete (success)</span>
              </div>
            </div>
            <p class="text-left">Js-MVC/MVVM</p>
            <div class="progress">
              <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                <span class="sr-only">20% Complete</span>
              </div>
            </div>
            <p class="text-left">Css-Style</p>
            <div class="progress">
              <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                <span class="sr-only">60% Complete (warning)</span>
              </div>
            </div>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    tools: {
      type: Array,
      required: true
    },
    level: {
      type: Number
    },
    skillId: {
      type: String,
      required: true
    }
  },
  computed: {
    groups: function() {
      //needs to return an object with the computed data to iterate through it
      var types = [];

      types = tools.map(function(obj){
        return {value: obj.level, type: obj.type};
      });

      return types.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
      });
    }
  }
}
</script>

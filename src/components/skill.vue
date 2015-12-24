<template>
  <div role="tabpanel" class="tab-pane fade in active" v-bind:class="{'in' : $index === 0, 'active' : $index === 0}" id="{{skillId}}">
    <div class="row">
      <div class="container">
        <div class="col-md-7">

          <template v-for="group in groups">
            <a href="#" v-on:click="draw( group.type, $event )" id="{{group.type}}">
              <p class="text-left">{{group.type}}</p>
              <div class="progress">
                <div class="progress-bar {{progressclass[$index]}}" role="progressbar" aria-valuenow="{{group.value}}" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: group.value + '%'}">
                  <span class="sr-only">{{group.value}}% Complete (success)</span>
                </div>
              </div>
            </a>
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
  methods: {
    draw: function ( type, event) {
      event.preventDefault();
      //dispatch to the parent the data selected

      this.$dispatch('chartify', this.tools.filter(function(element) { return element.type === type }));
    }
  },
  computed: {
    progressclass: function() {
      var classess = ['progress-bar-success', 'progress-bar-info', 'progress-bar-warning', 'progress-bar-danger'];

      return classess;
    },
    groups: function() {
      //needs to return an object with the computed data to iterate through it
      var _groups = [];
      var self = this;

      var getIndex = function(arr, obj){
        for (var i = 0; i < arr.length; i++){
          if (obj.type === arr[i].type){
            return i;
          }
        }
        return -1;
      };

      var countPerType = function(type) {
          var filtered = self.tools.filter(function(el, i) {
            return el.type === type;
          });
          return filtered.length;
      };

      for (var i = 0; i < this.tools.length; i++){
        var actual = this.tools[i];
        var index = getIndex(_groups, actual);
        //si se encuentra el type
        if ( index >= 0 ) {
          //se suma el value al objeto ya ingresaod en _groups
          var sum = _groups[index];
          sum.value = sum.value + actual.level;
          _groups[index] = sum;
        //si no se encuentra el type
        } else {
          //se agrega el obj con type y valor
          _groups.push({type: actual.type, value: actual.level});
        }
      }

      _groups.forEach(function(el){
        //console.log(countPerType(el.type));
        el.value = el.value / countPerType(el.type);
      });

      return _groups;
    }
  }
}
</script>

<template>
  <div role="tabpanel" class="tab-pane fade in active" v-bind:class="{'in' : $index === 0, 'active' : $index === 0}" id="{{skillId}}">
    <div class="row">
      <div class="container">
        <div class="col-md-7">

          <template v-for="group in groups">
            <p class="text-left">{{group.type}}</p>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="{{group.value}}" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width: group.value + '%'}">
                <span class="sr-only">{{group.value}}% Complete (success)</span>
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
      var _groups = [];

      var getIndex = function(arr, obj){
        for (var i = 0; i < arr.length; i++){
          if (obj.type === arr[i].type){
            return i;
          }
        }
        return -1;
      };

      for (var i = 0; i < this.tools.length; i++){
        var actual = this.tools[i];
        var index = getIndex(_groups, actual);
        console.log("i: " + i + ", index: " + index);
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
      return _groups;
    }
  }
}
</script>

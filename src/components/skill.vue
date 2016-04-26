<template>
  <div role="tabpanel" class="tab-pane fade" v-bind:class="{'in' : skillId === 'frontend', 'active' : skillId === 'frontend'}" id="{{skillId}}">
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
    draw: function (type, event) {
      event.preventDefault()
      // dispatch to the parent the data selected
      this.$dispatch('chartify', this.tools.filter(element => { return element.type === type }))
    }
  },
  computed: {
    progressclass: function () {
      const classess = ['progress-bar-success', 'progress-bar-info', 'progress-bar-warning', 'progress-bar-danger']
      return classess
    },
    groups: function () {
      // needs to return an object with the computed data to iterate through it
      let _groups = []
      let self = this

      let getIndex = (arr, obj) => {
        for (let i = 0; i < arr.length; i++) {
          if (obj.type === arr[i].type) {
            return i
          }
        }
        return -1
      }

      let countPerType = type => {
        let filtered = self.tools.filter((el, i) => {
          return el.type === type
        })
        return filtered.length
      }

      for (let i = 0; i < this.tools.length; i++) {
        let actual = this.tools[i]
        let index = getIndex(_groups, actual)
        // if type found
        if (index >= 0) {
          // added to what is already on _groups
          let sum = _groups[index]
          sum.value = sum.value + actual.level
          _groups[index] = sum
        // if there is no type
        } else {
          // add the object to _group
          _groups.push({type: actual.type, value: actual.level})
        }
      }

      _groups.forEach(el => {
        el.value = el.value / countPerType(el.type)
      })
      return _groups
    }
  }
}
</script>

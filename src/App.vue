<template>
  <div id="app">
    hello
    <v-container>
      <v-row>
        <v-col>
        <v-textarea
          outlined
          name="input"
          label="Input CSV"
          value=""
          aria-placeholder="Paste CSV here"
          @change="update"
          @keypress="update"
          v-model="input"
        ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        <v-textarea
          outlined
          name="output"
          label="Output CSV"
          v-model="output"
        ></v-textarea>
            </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import farnell from './lib/Farnell'

@Component({
  components: {}
})
export default class App extends Vue {
  private input = ''
  private output = ''

  private update () {
    this.output = farnell(this.input)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

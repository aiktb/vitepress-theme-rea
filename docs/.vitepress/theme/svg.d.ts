declare module '*.svg?raw' {
  import Vue, { VueConstructor } from 'vue'
  const content: VueConstructor<Vue>
  export default content
}

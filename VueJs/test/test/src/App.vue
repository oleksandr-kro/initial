<template>
  <div>
    <ul v-if="items.length">
      <li
      v-for=" (item, i) in items"
      @click="items.splice(i,1)"
      :key="item"
      >
        <strong>{{item}}</strong>
        <input @click.stop>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'App',
  data: ()=>({
    items:[1,2,3,4,5,6]
  }),
  methods:{

  }

}
</script>

<style>
li{
  list-style: none;
}
</style>

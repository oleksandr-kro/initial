<!--&lt;!&ndash;///// Homework Створити простий todolist В папці assests є скрін як приблизно має виглядати -->
<!--Має бути масив тудушок, в інпуті  вписуємо туду і пушимо в масив за допомогою кнопки Add. -->
<!--Видаляємо  тудушки за допомогою кнопки delete.    Якщо тудушок більше 10 кнопка повинна сховатись.&ndash;&gt;-->
  <template>
      <div>
                      <input  type="text"  v-model="action">
                      <input type="submit" v-if="todoArr.length<10" value="Send your action" @click="onInput()">
          <ul>
                <li  v-for="(object, index) in todoArr" :key="index">
                      <input type="submit"  value="remove" v-on:click="todoArr.splice(index, 1)">
                      <span class="objectIntodoArr">{{index+1}} {{object.action}}</span>
                </li>
          </ul>
      </div>
  </template>

  <script>
  export default {
      name: 'App',
      index:1,
      methods: {
  onInput(){
      let newObject = {action:this.action}
      this.todoArr.push(newObject)
      this.action =''
            },
                },
  data(){
    return {
        todoArr: [
          {action: 'to do exercising' },
          {action: 'take a rest' }
                  ],
        action:''
           }
          }
                }
</script>

<style>
  li {
    list-style: none;
  }
</style>

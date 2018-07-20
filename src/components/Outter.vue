<template>
  <div class="hello">
    <h1 :class="{test: style,test1:style}">
        欢迎{{info}}{{n+2}}{{infomsg}}
    </h1>
    <p v-show="seen">我是v-show的标签</p>
    <p v-if="seen" :class="style1">我是v-if的标签</p>
    <p v-else-if="seen1">我是v-if1111的标签</p>
    <p v-else>我是v-else的标签</p>
    <p :class="[style1,style2]">{{fullName}}</p>
    <button @click="change">按钮</button>
    <!-- <input type="text" @input="change"> -->
    <my-component></my-component>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Outter',
  data () {
    return {
      info: '登录',
      style: false,
      style1: 'test',
      style2: 'test1',
      n: 1,
      seen: false,
      seen1: true,
      firstName: '美玉',
      lastName: '宋'
    }
  },
  watch: {
      firstName: function(newQuestion,oldQuestion){
          console.log(newQuestion,oldQuestion);
          this.info = '正在努里加载。。。';
          setTimeout(this.news,1500)
      }
  },
    components: {
        'my-component': {
            template: '<div><p class="foo bar">Hi</p></div>'
        }
    },
  methods: {
    change: function(){
        // if(this.style == 'test1'){
        //     this.style = 'test';
        //     console.log(this.info);
        // } else {
        //     this.style = 'test1';
        //     this.info = '你好'
        // }
        this.fullName = '莉莎 陈'
    },
    news: function(){
         this.info = '新的登录'
    }

  },
  computed: {
      infomsg:function(){
          return this.info.split('').reverse().join('');
      },
      fullName: {
        // getter
        get: function () {
            return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
        }
    }
  }


//   new Vue = {
//        info: '登录',
//         style: 'test',
//         n: 1,
//         seen: false,
//         seen1: true,
//         change: function(){
//             this.style = 'test1';
//         },
//         created(){

        // }
//   }

//    data : function(){
//        return {
//         info: '登录',
//         style: 'test'
//         }
//    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .test{
        color: red;
    }
    .test1{
        color: yellow;
    }
</style>

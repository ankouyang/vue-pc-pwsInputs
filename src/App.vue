<template>
  <div id="app">
<!--    <PasswordInputs ref="inputs"-->
<!--                     :pwdTexts.sync="pwdTexts"-->
<!--                     :currentFocusIndex="currentFocusIndex"-->
<!--                     @pwdsChange="pwdsChange"-->
<!--                     @currentFocusIndexChange="currentFocusIndexChange" />-->

<!--    <PhonePassword  :show="ConfirmShowKeyboard"-->
<!--                    :fatherNum="ConfirmValue"-->
<!--                    @numberEvent="ConfirmOnInput"-->
<!--                    @deleteEvent="ConfirmOnDelete" />-->
  </div>
</template>

<script>
  export default {
    name:'App',
    data:()=>({
      pwdTexts: ['', '', '', '', '', ''],//真实密码
      currentFocusIndex: 0,
      ConfirmShowKeyboard:true,
      ConfirmValue:'',
    }),
    methods:{
      ConfirmOnInput(e){
        console.log(e);
      },
      ConfirmOnDelete(e){
        console.log(e);
      },
      pwdsChange ({ index, value }) {
        if (index === 5) {
          console.log(index, value);
          console.log(this.pwdTexts);
          console.log('调用接口')
          this.$refs.inputs.clear()
          // console.log(this.pwdTexts);
          // 调用接口回调支付
        }
      },
      currentFocusIndexChange (index) {
        this.currentFocusIndex = index
      },
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

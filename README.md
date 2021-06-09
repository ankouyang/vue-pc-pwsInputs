# password-input

## Project setup
```
npm i --save vue-password-component或者 yarn add vue-password-component
```


### 全局引入
```
import  password  from 'vue-password-component'
import "vue-password-component/lib/passwordComponent.css";
Vue.use(password)
```


### 局部引入
```
import  {PasswordInputs，PhonePassword}  from 'vue-password-component'
import "vue-password-component/lib/passwordComponent.css";
components:{
   passwordInput，
   PhonePassword
}
```



### 模板引入(这里有两个组件 一个pc端键入  一个移动端的数字键盘，根据需求需要)
```
PC端键入
 <PasswordInputs ref="inputs"
                     :pwdTexts="pwdTexts"
                     :currentFocusIndex="currentFocusIndex"
                     @pwdsChange="pwdsChange"
                     @currentFocusIndexChange="currentFocusIndexChange" />
					 
移动端数字键盘
					 <PhonePassword  :show="ConfirmShowKeyboard" />
```





### PasswordInputs调用
```
 export default {
    name:'App',
    data:()=>({
      pwdTexts: ['', '', '', '', '', ''], //数字的密码
      currentFocusIndex: 0,//焦点从哪里开始

    }),
    methods:{
	//输入密码监听
      pwdsChange ({ index, value }) { 
        if (index === 5) {
          console.log(index, value);
          console.log(this.pwdTexts);
          console.log('调用接口')
          // 调用接口回调支付
        }
      },
	  //下标监听
      currentFocusIndexChange (index) {
        this.currentFocusIndex = index
      },
    }
  }
```


### PhonePassword
```
属性：
ConfirmShowKeyboard数字键盘显示
ConfirmValue 输入数字键盘的数据
事件
numberEvent 监听输入的数字值
deleteEvent  删除当前输入

```


### PhonePassword
```
    <PhonePassword 
       :show="ConfirmShowKeyboard"
       :fatherNum="ConfirmValue"
       @numberEvent="ConfirmOnInput"
       @deleteEvent="ConfirmOnDelete"
	   />


```

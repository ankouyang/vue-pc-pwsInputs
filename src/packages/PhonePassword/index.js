//导入组件
import PhonePassword from "./src/PhonePassword";

//局部引入组件 添加install

PhonePassword.install =(Vue)=>{
    Vue.component(PhonePassword.name,PhonePassword)
}

//导出组件

export  default PhonePassword
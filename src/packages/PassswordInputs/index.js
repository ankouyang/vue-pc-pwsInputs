//导入组件
import PasswordInputs from "./src/PasswordInputs";

//局部引入组件 添加install

PasswordInputs.install =(Vue)=>{
    Vue.component(PasswordInputs.name,PasswordInputs)
}

//导出组件

export  default PasswordInputs
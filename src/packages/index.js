//组件库出口  对外暴露的
import PasswordInputs from "./PassswordInputs";
import PhonePassword from "./PhonePassword";


//存储所有组件
const  components = [PasswordInputs,PhonePassword]


//如果使用use的话 所有的组件都会被注册
const install = (Vue)=>{
    // 判断是否安装
    if (install.installed) return
      components.map(item=>Vue.component(item.name,item))
}


 // 判断是否是直接引入文件 以CDN的方式引入
     if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
     }

 //导出的组件,必须含有install
export  {install}
export  {PasswordInputs}
export  {PhonePassword}



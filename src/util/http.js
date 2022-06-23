import axios from "axios";
import loading from "../components/loading/index.js"

//  创建
const http = axios.create({
    // 设置超时请求
    timeout:4000,
    //  是否携带cookie
    withCredentials:true
})

http.interceptors.request.use(config=>{
    if(config.method=="get") {
        config.params = {...config.data};
    }else if(config.method == "post") {
        //  根据后端要求,传递什么样数据
        // config.hearders["content-type"]="application/x-www-form-urlencoded"
    }
    loading.open();
    return config;
},err=>{
    return Promise.reject(err);
})

http.interceptors.response.use(res=>{
    if(res.status == 200) {
        loading.close();
        return res.data;
    }
})

export default http;
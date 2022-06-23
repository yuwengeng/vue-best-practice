import http from "../util/http.js";

export const getActivityList = ({id,index})=>{
  console.log('params',id,index);
  let _ =1;
  if(index!=='undefined'){
    _ = index
  }

  return http({
    method:'POST',
    url: "https://www.xzpoll.com/api/Mp/GetCaseList",
    withCredentials: true,
    headers:{
      'Content-Type':'application/json'
    },
    data:{
      GroupId: id,
      PageSize: 12,
      PageIndex: _,
      SearchKey: ""
    }
})
}


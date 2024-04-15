const apireqest= async (url='', optionobject=null,errmsg=null)=>{
try{
    const responce =await fetch(url,optionobject)
    if(!responce.ok) throw Error("reload the page")

}catch(err){  
    errmsg=err.message

}finally{
     return errmsg

}

}
export default apireqest
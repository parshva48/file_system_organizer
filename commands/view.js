
let flat=require("../makingflat/flat");
let tree=require("../makingflat/treeview");
function helper(dirname,mode){
if(mode=='tree')
    {
      tree.treeview(dirname);

    }
    else if(mode=='flat'){
        //console.log("flat mode is selected for folder",dirname);
           flat.flatview(dirname);
    }
    else{
        console.log("wrong mode");
    }

}

module.exports={
   
    fn:helper

}
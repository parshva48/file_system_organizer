function  tree(path){
    let fs = require("fs");
    let pth=require("path");
    function Ispathfile(path)
    {
        return fs.lstatSync(path).isFile();
    
    }
    
    function GetContent(path)
    {
        return fs.readdirSync(path);
    }
    
    function printtree(path,space)
    {
    
        let ispathfile=Ispathfile(path);
        let nfile=pth.basename(path);
        if(ispathfile==true)
        {
           console.log(space+nfile+"*");
    
        }
        else{
            console.log(space+nfile);
            let content=GetContent(path);
            for(let i=0;i<content.length;i++)
            {
                printtree(path+"\\"+content[i],space+"\t");
            }
        }
    
    
    }
    
    printtree(path,"");


}

module.exports={
    treeview:tree
}



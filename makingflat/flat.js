
function  flat(path){
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
    
    function printflat(path,psf)
    {
    
        let ispathfile=Ispathfile(path);
        let nfile=pth.basename(path);
        if(ispathfile==true)
        {
           console.log(psf+nfile+"*");
    
        }
        else{
            console.log(psf+nfile);
            let content=GetContent(path);
            for(let i=0;i<content.length;i++)
            {
                printflat(path+"\\"+content[i],psf+nfile+"\\");
            }
        }
    
    
    }
    
    printflat(path,"");


}

module.exports={
    flatview:flat
}



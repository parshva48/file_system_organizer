function helper(dirname){
    if(dirname==undefined)
    {
        dirname=process.cwd();
    }
    let path=require("path");
    let fs=require("fs");
    let types={
    
        media:["mkv","mp4"],
        archives:['zip','7z','rar','tar','gz','ar','iso',"xz"],
        documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex','cpp'],
        app:['exe','dmg','pkg',"deb"]
    
    }
    function organizefolder(foldername)
    {
       if(fs.existsSync(path.join(foldername,"organize_folder"))==false)
       {
             fs.mkdirSync(path.join(foldername,"organize_folder"));
       }
       organize(foldername,path.join(foldername,"organize_folder"));
    }
    
    function Isfile(path)
    {
        return fs.statSync(path).isFile();
    }
    function getcontent(folder)
    {
        return fs.readdirSync(folder);
    }
    
    function Extensionsoffile(folder)
    {
        let ext=folder.split(".").pop();
        for(let type in types)
             {
                 for(let i=0;i<types[type].length;i++)
                 {
                     if(ext==types[type][i])
                       return type;
                 }
             }
    
             return "other";
    }
    function sendfile(src,dest,foldername)
    {
        let pathoffolder=path.join(dest,foldername);
    if(fs.existsSync(pathoffolder)==false)
      {
          fs.mkdirSync(pathoffolder);
      }
     let name=path.basename(src);
      fs.copyFileSync(src,path.join(pathoffolder,name));
    }
    function organize(folder,dest)
    {
        let isfile=Isfile(folder);
        if(isfile==true)
        {
            let getfolder=Extensionsoffile(folder);
             
            sendfile(folder,dest,getfolder);
    
        }
        else{
    
            let content=getcontent(folder);
            for(let i=0;i<content.length;i++)
            {
                organize(path.join(folder,content[i]),dest);
            }
    
        }
    
    }
    organizefolder(dirname);
    
    
}

module.exports={
   
    fn:helper

}
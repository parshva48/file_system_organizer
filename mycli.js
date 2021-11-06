#! /usr/bin/env node
let input=process.argv.slice(2);
let command=input[0];
let helpfile=require("./commands/help.js");
let viewfile=require("./commands/view.js");
let orgaizefile=require("./commands/organize.js");
switch(command)
{
    case "view":
        console.log("view mode is selected");
        viewfile.fn(input[1],input[2]);
        break;

    case "organize":
        console.log("organize command is selected");
        orgaizefile.fn(input[1]);
        break;
   
        case "help":
            console.log("help command is selected");
            helpfile.fn();
            break;
     default:
        console.log("not such command");

}
let dictionary={
    "debug" :'The process of figuring out why your program has a certain error and how to fix it' ,
    "done"  :'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    "defect":'The formal word for ‘error’ ' ,
    "pm"    :'The short version of Project Manager, the person in charge of the final result of a project' ,
    "ui/ux" :'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
} ;
while(true){
alert("Hi there ,this is dev dictionary")
    switch(prompt("Enter a keyword")){
        case "debug" : {
           alert(`${"debug:"} ${dictionary.debug}`)
           break
        }
        case "done" :  {
           alert(`${"done:"} ${dictionary.done}`)
           break
        }
        case "defect" :{
           alert(`${"defect:"} ${dictionary.defect}`)
           break
        }
        case "pm" :    { 
           alert(`${"pm:"} ${dictionary.pm}`)
           break
        }
        case "ui/ux" : {
           alert(`${"ui/ux:"} ${dictionary.ui/ux}`)
           break
        }
        default : {
            let definition =prompt("We could not find your word :dev,leave your explanation")
            dictionary.definition=definition
            alert(`${definition} ${":"} ${dictionary.definition}`)
            alert("Done")
            break
        }
    }
}
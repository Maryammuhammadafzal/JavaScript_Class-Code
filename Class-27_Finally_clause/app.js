

//Finally'
// the try catch construct have one or more clause that is finally
//finall is always run while there an error or not
//finally we use for a fnal clean up  eg : close the file , exit the loop , writw to log file
//  finally can execute just beforevthe control return the outer code 

try{
 let a = 0;
 console.log(program);
 console.log("program is successfully run ");
 
    
}
catch(err){
    console.log(err);
    console.log(p);
    
}
finally{
    console.log("fnally run");
    
}

let f =  () => {
    try{
        let a = 0;
        console.log(program);
        console.log("program is successfully run ");
        return
           
       }
       catch(err){
           console.log(err);
           console.log(p);
           
       }
       finally{
           console.log("fnally run");
           
       }
}

f()
console.log("end");

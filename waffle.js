makewaffle(getIcecream);

function makewaffle(callback){
    setTimeout(() =>{
        console.log("get the table");
        console.log("waffle is ready")
        callback()
    },  2500);
    
};
function getIcecream(){
    setTimeout(() => {
        let icecream=false;
        if(icecream){
            console.log("got the icecream")
        }else{
            console.log("did ot get icecream")
        }
    },1500)        
           
        
}

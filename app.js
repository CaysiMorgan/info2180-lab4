window.onload= function(){

    let button= document.getElementById("btn");

    button.addEventListener("click", function(e){
        
        httpReq= new XMLHttpRequest();
        let url ="http://localhost/info2180-lab4/superheroes.php?query="+searchAct.value+"";
        httpReq.open('GET',url);
        httpReq.send();
        httpReq.onreadystatechange= reply;
    });

    function reply(){
        if(httpReq.readyState=== XMLHttpRequest.DONE){
            if(httpReq.status===200){
                result.innerHTML=httpReq.responseText;
            }else{
                alert('There was an Error')
                }
            }
            
    }
}
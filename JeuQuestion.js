
$(document).ready(function(){     
    //Dès qu'on clique sur #b1, on applique hide() au titre
    $(".btn4").click(function(){
        $("").hide();
    });
    
    //Dès qu'on clique sur #b1, on applique show() au titre
    $(".btn4").click(function(){
        $(".formulaire2").show();
    });
	            
                 
});
function validateForm(){
	            
                 var Nom = document.forms["myForm"]["nom"]; 			 
                 if (Nom.value == ""){ 
				 alert('veuillez entrez un nom valide');}
				  var Mail = document.forms["myForm"]["mail"]; 			 
                 if (Mail.value == ""){ 
				 alert('veuillez entrez une adresse mail valide');}
				  var Commande = document.forms["myForm"]["commande"]; 			 
                 if (Commande.value == ""){ 
				 alert('veuillez entrez un numéro de commande valide');}
				 
}

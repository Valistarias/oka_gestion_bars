"use strict";
document.getElementById("btncafe").addEventListener('click', btncafe, false);
var self = this;
function btncafe(e) {
	e.preventDefault();
	//Désactive les réactions de base de btncafe (redirection vers ne page vu que c'est un a)
	
	model.getPosition(function(userPos){
	// Récupere la position de l'utilisateur
		for (self.i = model.baradress.length -1; i >= 0; i--) {
		// Boucle pour chaque bar
			model.getGpsBar(i,model.baradress[i].adresse, userPos,function(i,userPos, barPos){
			// Transforme l'adresse en coord gps
				model.calculBar(i,userPos,barPos,function(i,d){
				//Calcule la distance entre la pos de l'utilisateur et le bar
					model.baradress[i].distbar = d;
					//L'ajoute dans le tableau des bars
					if (i <= 0)
					{
						model.triBar(function(){
							UI.construct();
						});
					}
				});

			});
		};
		
	});
}
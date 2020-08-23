









/*
FONCTION D'AFFICHAGE DES APPLICATIONS
*/

function aff_apps(){
    var nbg=4;
    var nbw=4;
    //on recherche celles qui peuvent être affichées : 
    var games_to_aff=[];
    var websites_to_aff=[];

    for(i=0; i<applications.length; i++){
        var a = applications[i];
        if(a.type=="game"){
            games_to_aff.push(i);
        }
        else if(a.type=="website"){
            websites_to_aff.push(i);
        }
    }
    //tri de celles qui seront affichés
    for(i=0; i<games_to_aff.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=games_to_aff[i];
                games_to_aff[i]=games_to_aff[j]
                games_to_aff[j]=temp;
            }
        }
    }
    for(i=0; i<websites_to_aff.length; i++){
        for(j=0; j<i; j++){
            var ai=applications[i];
            var aj=applications[j];
            if(ai.priority>aj.priority){
                var temp=websites_to_aff[i];
                websites_to_aff[i]=websites_to_aff[j]
                websites_to_aff[j]=temp;
            }
        }
    }
    while(games_to_aff.length>nbg){
        games_to_aff.splice(-1,1);
    }
    while(websites_to_aff.length>nbg){
        websites_to_aff.splice(-1,1);
    }
    //affichage de celles qu'il faut afficher
    for(appid of games_to_aff){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_games").appendChild(dive);
    }
    for(appid of websites_to_aff){
        var dive=create_bt_to_app(appid);
        document.getElementById("slider_websites").appendChild(dive);
    }

}













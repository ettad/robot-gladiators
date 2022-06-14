var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 50;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth > 0/** && playerMoney > 0 **/) {
        
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert (playerName + " has chosen to skip the fight!");
    
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // if yes (true), leave fight
            if (confirmSkip) {
                
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            // if no (false), ask question again by running fight() again
            else {
              fight();
            }
        }
        else{
            window.alert("You need to choose a valid option. Try again!");
        }


        if(promptFight === "fight" || promptFight === "FIGHT") {
    
          // remove enem's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
    
          console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
         
            // check enemy's health
            if (enemyHealth <=0) {

                window.alert(enemyName + " has died ");
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    
            // remove player's health by subtracting the amount set in the enemyAttack variable
    
            playerHealth = playerHealth - enemyAttack;
        
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
            if (playerHealth <=0) {

                window.alert(playerName + " has died ");
                break;
            }
            else {

                window.alert (playerName + " still has " + playerHealth + " health left.");
            }
    
            
        }
    }

}

for (var i=0; i<enemyNames.length; i++){
    
    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;
    
    fight(pickedEnemyName);
}


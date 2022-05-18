var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack); //You can also log multiple values at once like this

//Enemy Data
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//declared fight function
var fight = function () {
  //Alert players that a round has started
  window.alert("The fight has begun!");

  //fight or skip prompt
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract the value of playerAttack from enemyHealth then update the value in enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
    //playerName attacked enemyName. enemyName now has enemyHealth left
    console.log(
      playerName +
        " attacked " +
        enemyName +
        " . " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );
    // Subtract the value of enemyAttack from playerHealth then update the value in playerHealth variable
    playerHealth = playerHealth - enemyAttack;
    //enemyName attacked playerName. playerName now has playerHealth left
    console.log(
      enemyName +
        " attacked " +
        playerName +
        " . " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
};

fight();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
console.log(playerName, playerHealth, playerAttack); //You can also log multiple values at once like this

//Enemy Data
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//declared fight function
var fight = function () {
  //Alert players that a round has started
  window.alert("The fight has begun!");

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
};

fight();

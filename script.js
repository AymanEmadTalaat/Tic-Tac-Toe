const game = (function () {
  ///////////////////////////////////////////////////
  const players = {
    playerNames: document.querySelector(".player-names"),
    player1: document.querySelector("#Player-one"),
    player2: document.querySelector("#Player-two"),
    playerMarks: ["x", "o"],
  };

  ///////////////////////////////////////////////////

  const Gameboard = {
    gameboard: [],
  };

  ///////////////////////////////////////////////////////////////
  const startGameBtn = document.querySelector(".btn1");

  const startGame = {
    startGameBtn: startGameBtn.addEventListener("click", () => {
      const { playerNames, player1, player2 } = players;

      const playerOne = player1.value;
      const playerTwo = player2.value;

      if (playerOne === "" && playerTwo === "") {
        startGameBtn.ariaDisabled;
      } else if (playerOne.length < 2 && playerTwo.length < 2) {
        startGameBtn.ariaDisabled;
      } else if (playerOne === "" || playerTwo === "") {
        startGameBtn.ariaDisabled;
      } else if (playerOne.length < 2 || playerTwo.length < 2) {
        startGameBtn.ariaDisabled;
      } else if (playerNames.innerHTML !== "") {
        startGameBtn.ariaDisabled;
      } else {
        const pElement1 = document.createElement("p");
        const pElement2 = document.createElement("p");

        pElement1.textContent = `${playerOne}`;
        pElement2.textContent = `${playerTwo}`;

        playerNames.appendChild(pElement1);
        playerNames.appendChild(pElement2);
      }

      game.gameLogic();
    }),
  };
  ////////////////////////////////////////////////////////////////
  const cells = document.querySelector(".container");
  const cell1 = document.querySelector("#cell1");
  const cell2 = document.querySelector("#cell2");
  const cell3 = document.querySelector("#cell3");
  const cell4 = document.querySelector("#cell4");
  const cell5 = document.querySelector("#cell5");
  const cell6 = document.querySelector("#cell6");
  const cell7 = document.querySelector("#cell7");
  const cell8 = document.querySelector("#cell8");
  const cell9 = document.querySelector("#cell9");

  const gameLogic = function () {
    cells.addEventListener("click", (e) => {
      let target = e.target;

      if (target.textContent !== "") {
        return;
      }

      Gameboard.gameboard.push(target);

      Gameboard.gameboard.textContent =
        Gameboard.gameboard.textContent === players.playerMarks[0]
          ? players.playerMarks[1]
          : players.playerMarks[0];

      for (let i = 0; i < Gameboard.gameboard.length; i++) {
        target.textContent = Gameboard.gameboard.textContent;
      }

      console.log(Gameboard.gameboard);
      Gameboard.gameboard.pop(target);
      ////////////////////////////////////////////////////////////

      if (
        cell1.textContent === "x" &&
        cell2.textContent === "x" &&
        cell3.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell4.textContent === "x" &&
        cell5.textContent === "x" &&
        cell6.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell7.textContent === "x" &&
        cell8.textContent === "x" &&
        cell9.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell1.textContent === "x" &&
        cell4.textContent === "x" &&
        cell7.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell2.textContent === "x" &&
        cell5.textContent === "x" &&
        cell8.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell3.textContent === "x" &&
        cell6.textContent === "x" &&
        cell9.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell1.textContent === "x" &&
        cell5.textContent === "x" &&
        cell9.textContent === "x"
      ) {
        console.log("Player1 wins");
      } else if (
        cell3.textContent === "x" &&
        cell5.textContent === "x" &&
        cell7.textContent === "x"
      ) {
        console.log("Player1 wins");
      } //////////////////////////////////////
      else if (
        cell1.textContent === "o" &&
        cell2.textContent === "o" &&
        cell3.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell4.textContent === "o" &&
        cell5.textContent === "o" &&
        cell6.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell7.textContent === "o" &&
        cell8.textContent === "o" &&
        cell9.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell1.textContent === "o" &&
        cell4.textContent === "o" &&
        cell7.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell2.textContent === "o" &&
        cell5.textContent === "o" &&
        cell8.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell3.textContent === "o" &&
        cell6.textContent === "o" &&
        cell9.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell1.textContent === "o" &&
        cell5.textContent === "o" &&
        cell9.textContent === "o"
      ) {
        console.log("Player2 wins");
      } else if (
        cell3.textContent === "o" &&
        cell5.textContent === "o" &&
        cell7.textContent === "o"
      ) {
        console.log("Player2 wins");
        //////////////////////////////////////////////
      } else if (
        cell1.textContent !== "" &&
        cell2.textContent !== "" &&
        cell3.textContent !== "" &&
        cell4.textContent !== "" &&
        cell5.textContent !== "" &&
        cell6.textContent !== "" &&
        cell7.textContent !== "" &&
        cell8.textContent !== "" &&
        cell9.textContent !== ""
      ) {
        console.log("It's a tie");
      }
    });
  };

  //////////////////////////////////////////////////////
  const restartGameBtn = document.querySelector(".btn2");

  const restartGame = function () {
    restartGameBtn.addEventListener("click", () => {
      location.reload();
    });
  };

  restartGame();

  return { players, Gameboard, startGame, gameLogic, restartGame };
})();

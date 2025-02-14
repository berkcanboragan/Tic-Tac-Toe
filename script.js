const playgrounds = document.querySelectorAll(".playground");
const reset = document.getElementById("reset");
let clickIndex = 0;

function refresh() {
  location.reload();
}

const won = [];
won[0] = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
];

won[1] = [[1, 4, 7]];

won[2] = [
  [2, 5, 8],
  [2, 4, 6],
];

won[3] = [[3, 4, 5]];

won[6] = [[6, 7, 8]];

document.addEventListener("DOMContentLoaded", function () {
  console.log(won);
  playgrounds.forEach((ground) => {
    ground.addEventListener("click", function () {
      if (!ground.classList.contains("unclick")) {
        clickIndex += 1;
        ground.classList.add("unclick");

        if (clickIndex % 2 == 0) {
          ground.textContent = "O";
        } else {
          ground.textContent = "X";
        }
      }
      checkWon();
    });
  });
});

function checkWon() {
  won.forEach((win) => {
    win.forEach((w) => {
      let index0 =
        document.getElementsByClassName("playground")[w[0]].textContent;
      let index1 =
        document.getElementsByClassName("playground")[w[1]].textContent;
      let index2 =
        document.getElementsByClassName("playground")[w[2]].textContent;

      if (index0 === index1 && index1 === index2 && index0 !== "") {
        setTimeout(() => {
          alert(index0 + " Won");
          location.reload();
        }, 100);
      }
    });
  });
}

reset.addEventListener("click", refresh);

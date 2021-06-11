function AccusationOfCrime() {
  var friendName = ["Nathan", "Anna", "Chrystal", "Victoria", "Jose"];
  var locationName = [
    "living room",
    "dining room",
    "bedroom",
    "bathroom",
    "kitchen",
    "studyroom",
    "basement",
    "attic",
    "cellar",
    "conservatory",
  ];
  var weaponName = [
    "knife",
    "ice pick",
    "machete",
    "wrench",
    "pipe",
    "hammer",
    "captive bolt pistol",
    "mace",
    "shiv",
    "bow and arrow",
    "cyanide",
    "bleach",
    "axe",
    "peanuts",
    "rope",
    "bees",
    "icicle",
    "nailgun",
    "candlestick",
    "musket",
  ];
  for (var i = 0; i < 101; i++) {
    if (i > 0) {
      var h3 = document.createElement("h3");
      h3.innerText = `Accusation ${i}`;
      document.body.appendChild(h3);

      h3.addEventListener("click", function () {
          i++;
          alert(
              `I accuse ${friendName[i % friendName.length]}, with the ${
                  weaponName[i % weaponName.length]
                } in the ${locationName[i % locationName.length]}`
                );
                // console.log(`I accuse ${friendName[i % friendName.length]}, with the ${weaponName[i % weaponName.length]} in the ${locationName[i % locationName.length]}`)
            });
        }
    }
}
AccusationOfCrime();

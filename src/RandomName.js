function RandomName() {
  const names = [
    "Ivan",
    "Marko",
    "Tihana",
    "Barbara",
    "Tamara",
    "Rina",
    "Tihomir",
    "Luka",
    "Dino",
    "Hana",
  ];
  const surnames = [
    "Janković",
    "Kovač",
    "Musić",
    "Žagar",
    "Pleša",
    "Stojanović",
    "Bobić",
    "Hlanuda",
    "Ris",
    "Barnjak",
  ];
  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];
  return name + " " + surname;
}

export default RandomName;

/*
  ADDING A MOD
  ------------
  Copy one object below, change the values, and that's it.
  The website will automatically create another card.

  downloadUrl can be:
    - A GitHub Release URL, e.g.
      "https://github.com/YOUR-USERNAME/YOUR-REPO/releases/download/v1.1.0/mod.jar"

    - Or a file stored in this website's /public/downloads folder, e.g.
      "/downloads/my-mod-1.0.0.jar"
*/

export const mods = [
  {
    id: "million-miner",
    name: "Million Miner",
    version: "1.1.0",
    minecraft: "1.20.1",
    loader: "Forge",
    featured: true,
    icon: "./mod-icons/million-miner.svg",
    description:
      "Turn mining into a full progression challenge. Every block has a cash value, and your earnings can be reinvested into powerful upgrades on the road to $100,000,000.",
    features: [
      "Upgradeable mining radius and vein mining",
      "Speed, jump, haste and utility perks",
      "Block values, milestones and a $100M goal",
    ],

    /*
      REPLACE THIS with your real .jar download URL.
      Until then, clicking Download opens this placeholder file.
    */
    downloadUrl: "./downloads/PUT-YOUR-JAR-HERE.txt",
  },

  /*
  EXAMPLE OF A SECOND MOD:

  {
    id: "example-mod",
    name: "Example Mod",
    version: "1.0.0",
    minecraft: "1.20.1",
    loader: "Forge",
    featured: false,
    icon: "./mod-icons/default.svg",
    description:
      "A short description explaining what the mod does and why somebody would want to download it.",
    features: [
      "First interesting feature",
      "Second interesting feature",
      "Third interesting feature",
    ],
    downloadUrl:
      "https://github.com/YOUR-USERNAME/YOUR-REPO/releases/download/v1.0.0/example-mod-1.0.0.jar",
  },
  */
];

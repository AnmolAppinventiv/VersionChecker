import fs from "fs";

const FILE_PATH = "./public/versions/currentVersion.json";

function upgradeVersion() {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    let jsonData = JSON.parse(data);
    if (jsonData && jsonData.version) {
      const versionData = parseInt(jsonData.version, 10);
      const newVersion = versionData + 1;
      jsonData.version = newVersion.toString();
      fs.writeFile(FILE_PATH, JSON.stringify(jsonData, null, 2), () => {
        console.log("Version updated to:", jsonData.version);
      });
    }
  });
}

upgradeVersion();

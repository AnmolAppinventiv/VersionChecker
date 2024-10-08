    import fs from "fs";

    const FILE_PATH = "./public/versions/currentVersion.json";

    function upgradeVersion() {
        
    fs.readFile(FILE_PATH, "utf8", (err,data) => {
        if(err){
            console.log('might be some error');
        }
        const jsonData = JSON.parse(data);       
        if (jsonData) {
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
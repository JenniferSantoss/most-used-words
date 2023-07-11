const { ipcMain } = require("electron")

ipcMain.on("blabla", () => {
    console.log("alo")
})
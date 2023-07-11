const { ipcMain } = require("electron")

const pathToRows = require("./pathsToRows")

ipcMain.on("process-subtitles", (event, paths) => {
    pathToRows(paths)
    .then(rows => prepareData(rows))
});
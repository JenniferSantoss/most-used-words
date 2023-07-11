const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
    console.log(paths);
    event.reply("process-subtitles", [
        {word: "i", amount:567},
        {word: "you", amount: 478},
        {word: "it", amount: 10}
    ]);
});
const fs = require("fs/promises");

(async () => {
  const commandFileHandler = await fs.open("./command.txt", "r");

  const watcher = fs.watch("./command.txt");

  for await (const event of watcher) {
    if (event.eventType === "change") {
      console.log("The file was changed");
      const size = (await commandFileHandler.stat()).size;
      const content = await commandFileHandler.read(Buffer.alloc(size));
      console.log(content);
    }
  }
})();

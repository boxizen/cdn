const runCommand = require("../runCommand");

module.exports = async (localPath, options) => {
  // const { exts } = options;
  return runCommand("git", ["rev-parse"].concat(options), {
    cwd: localPath
  });
};

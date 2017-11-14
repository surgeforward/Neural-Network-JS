var fs = require('fs');
var path = require('path');

module.exports = {
    getCurrentDirectoryBase: function() {
	return path.basename(process.cwd());  // get working directory... not of where this resides but where this is being called
    },

    directoryExists : function(filePath) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};


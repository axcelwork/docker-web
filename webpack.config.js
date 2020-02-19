const glob = require("glob");
const entries = glob.sync("./resources/js/src/assets/**/*.js");
const frames = glob.sync("./resources/js/src/frame_entry/**/*.js");
const libs = glob.sync("./resources/js/src/lib/**/*.js");

const base = {
  entry: entries,
  output: {
    path: __dirname + '/htdocs/assets/js',
    filename: 'app.js'
  }
}

const frame = {
  entry: frames,
  output: {
    path: __dirname + '/htdocs/assets/js',
    filename: 'frame.js'
  }
}

const lib = {
  entry: libs,
  output: {
    path: __dirname + '/htdocs/assets/js',
    filename: 'axia.js'
  },
  externals: [
    {
      jquery: 'jQuery'
    }
  ]
}

module.exports = [base, frame, lib]


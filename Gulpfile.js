const { src, dest, watch, series } = require("gulp")
const plugins = require("gulp-load-plugins")()

// Compile & autoprefix the SCSS
const sass = () => {
  return src("sass/*.scss")
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(dest("css/"));
}

// `export` makes it public (from the CLI)
exports.sass = sass

// Watch for changes and rebuild CSS (Note single task)
const watcher = () => watch("sass/**.scss", sass)

// `export` makes it public (from the CLI)
exports.watch = watcher

// Set default task
exports.default = series(watcher)

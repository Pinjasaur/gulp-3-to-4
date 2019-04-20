var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")();

// Compile & autoprefix the SCSS
gulp.task("build:sass", function () {
  return gulp
    .src("sass/*.scss")
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest("css/"));
});

// Watch for changes and rebuild CSS
gulp.task("watch", function () {
  gulp.watch("sass/**.scss", ["build:sass"]);
});

// Set default task
gulp.task("default", ["watch"]);

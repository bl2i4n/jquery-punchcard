var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    concatcss = require("gulp-concat-css"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    stripDebug = require("gulp-strip-debug"),
    rename = require("gulp-rename");

var path = {
    dist: "./dist/",
    src: "./src/*.*",
    css: "./src/*.css",
    js: "./src/*.js",
};

/* clean */
gulp.task("clean", function (cb) {
    rimraf(path.dist, cb);
});

gulp.task("min:css", function () {
    return gulp.src(path.css)
        .pipe(concatcss("punchcard.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(path.dist));
});
gulp.task("min:js", function () {
    return gulp.src(path.js)
        .pipe(concat("punchcard.min.js"))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest(path.dist));
});
gulp.task("copy", function () {
    return gulp.src(path.src)
        .pipe(gulp.dest(path.dist));

});

/* build */
gulp.task("build", ["clean", "min:css", "min:js", "copy"]);

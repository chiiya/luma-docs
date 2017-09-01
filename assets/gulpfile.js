const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const sassLint = require('gulp-sass-lint');
const eslint = require('gulp-eslint');
const cleanCSS = require('gulp-clean-css');

const paths = {
  src: './',
  build: '../static',
};
const config = {
  projectName: 'luma-docs',
  sass: `${paths.src}/scss/**/*.scss`,
  sass_exclude: `!${paths.src}/scss/base/_normalize.scss, !${paths.src}/vendor/*.scss`,
};


/**
 * Run all tasks needed for a build.
 */
gulp.task('build', ['sass']);

/**
 * Default task. Run the watch task
 */
gulp.task('default', ['watch']);

/**
 * Run the build task and then start watching for changes.
 */
gulp.task('watch', ['build'], () => {
  gulp.watch(config.sass, ['sass']);
});

/**
 * Compile Sass, run autoprefixer and minify the outcome.
 */
gulp.task('sass', ['sass:lint'], () => {
  return gulp.src(`${paths.src}/scss/*.scss`)
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(rename(`${config.projectName}.min.css`))
    .pipe(gulp.dest(`${paths.build}/css`));
});

/**
 * Lint SCSS files
 */
gulp.task('sass:lint', () => {
  return gulp.src([config.sass, config.sass_exclude])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});


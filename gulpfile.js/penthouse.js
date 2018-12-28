const gulp = require('gulp')
const criticalCss = require('gulp-penthouse')

gulp.task('penthouse', () => global.config.penthouse.criticalCssConfigs.forEach(config => gulp.src(`${global.config.proot + global.config.dest +
    global.config.css.dest + global.config.penthouse.src}`)
  .pipe(criticalCss(config))
  .pipe(gulp.dest(global.config.proot))))

gulp.task('critical:dev', ['penthouse'])

gulp.task('critical:dist', callback => runSequence('penthouse', 'css:minify:deploy', callback))

gulp.task('critical:deploy', callback => runSequence('penthouse', 'css:minify:deploy', callback))

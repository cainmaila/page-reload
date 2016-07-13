var gulp = require('gulp');
var gulpLivereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var nodemonConfig = {
    script: 'app.js',
    ignore:['**'],
    env: {
        "NODE_ENV": "development",
        "PORT": 80
    }
};

gulp.task('web', function() {
    nodemon(nodemonConfig);
});

gulp.task('reload',function(){
	gulpLivereload.reload()
});

gulp.task('watch', function() {
    gulpLivereload.listen();
    gulp.watch(['www/**'], ['reload']);
});

gulp.task('default', ['web','watch']); // 開發用
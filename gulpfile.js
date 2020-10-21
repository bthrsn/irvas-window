"use strict";

const gulp = require("gulp"),
      ftp = require("vinyl-ftp"),
      webpack = require("webpack-stream"),
      browsersync = require("browser-sync"),
      ghPages = require('gulp-gh-pages');

const dist = "./dist/";
// const dist = 'D:/OpenServer/domains/test';

gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
    return gulp.src("./src/assets/**/*.*")
                .pipe(gulp.dest(dist + "/assets"))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: {
      baseDir: 'http://e99920c3.beget.tech/irvas_window/public_html'
    },
		notify: true,
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("copy-html", "copy-assets", "build-js"));

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist));
});

// Для выгрузки на хостинг
gulp.task("deploy", () => {
  const conn = ftp.create({
    host: 'e99920c3.beget.tech',
    user: 'e99920c3',
    pass: '1111111',
  });

  const globs = [
    './dist/**/*.*',
  ];

  return gulp.src(globs, {buffer: false})
          .pipe(conn.dest('http://e99920c3.beget.tech/irvas_window/public_html'));
});

// Для выгрузки на gh pages
gulp.task('deploy-gh-pages', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task("default", gulp.parallel("watch", "build"));
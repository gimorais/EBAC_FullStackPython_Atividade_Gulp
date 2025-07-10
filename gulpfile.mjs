// Importando o Gulp
import gulp from 'gulp';
const { src, dest, parallel } = gulp;

// SASS
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
const sass = gulpSass(dartSass);

// CSS Minify
import cleanCSS from 'gulp-clean-css';

// Imagem
import imagemin from 'gulp-imagemin';

// JS
import uglify from 'gulp-uglify';

// Compilar e minificar SASS
function compilarSass() {
    return src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
}

// Comprimir imagens
function comprimirImagens() {
    return src('src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/images'));
}

// Minificar JS
function comprimirJs() {
    return src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

// Tarefa padrão
export default parallel(compilarSass, comprimirImagens, comprimirJs);
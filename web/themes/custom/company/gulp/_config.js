module.exports = {
  rtl: true,
  styles: {
    source: ['sass/**/*.scss'],
    destination: 'dist/css/',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules']
    }
  },
  scripts: {
    source: ['js/**/*.js'],
    destination: 'dist/js/'
  },
  svg: {
    source: 'images/icons/svg/**/*.svg',
    destination: 'dist/images/icons/svg/'
  },
  env: {
    prod: 'production',
    test: 'test',
    dev: 'development'
  },
  autoprefixer: {
    browsers: ['last 2 versions']
  },
  stylelint: {
    options: {
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    },
    optionsTest: {
      reporters: [
        {
          formatter: 'string',
          console: true,
          failAfterError: true
        }
      ]
    }
  },
  eslint: {
    options: {
      fix: false
    }
  },
  babel: {
    presets: [
      [
        'env',
        {
          targets: {
            browsers: ['last 2 versions']
          }
        }
      ]
    ]
  },
  browserSync: {
    proxy: null,
    open: true,
    xip: false,
    logConnections: false
  }
};

const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
const seleniumServer = require("selenium-server");


module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  src_folders: ["step-definitions"],
  //output_folder: "report",
  custom_assertions_path: "",
  page_objects_path: ["page_objects/"],
  live_output: false,
  disable_colors: false,
  test_settings: {
    default: {
      silent: true,
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444'],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          w3c: false
        }
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          w3c: false,
          args: ['headless', 'disable-gpu']
        }
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444'],
        
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['disable-gpu'],
          w3c: false
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    }
  }
};

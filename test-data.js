require('dotenv').config()

global.baseUrl = process.env.TEST_BASE_URL;
global.testUser = process.env.TEST_USER;
global.testPass = process.env.TEST_PASS;

global.driver = null;
global.timeStart = null;
global.timeEnd = null;

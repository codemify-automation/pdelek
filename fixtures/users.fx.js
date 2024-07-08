const { test: base, expect } = require('@playwright/test');
const { UsersApi } = require('../api/users.api');

const myFixtures = base.extend({
  newUser: async ({ page }, use) => {
    // Set up the fixture.
    const usersApi = new UsersApi(page);
    
    const createUser = await usersApi.registerUser();

    // Use the fixture value in the test.
    await use(createUser);

    // Clean up the fixture.
    // await todoPage.removeAll();
  },
});

module.exports = {
    test: myFixtures,
    expect,
  };
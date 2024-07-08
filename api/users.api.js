import { request, APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class UsersApi {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async registerUser(isRealtor = false) {
        const userData = {
            "username": faker.person.firstName(),
            "user_surname": faker.person.lastName(),
            "email": faker.internet.email(),
            "password": "DontTestMe",
            "isRealtor": isRealtor.toString()
        }

        const apiContext = await request.newContext();
        const response = await apiContext.post('/api/users/registration', {
            data: userData
        });

        return { userData, response }
    }
}
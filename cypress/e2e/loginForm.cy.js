import LoginFormPageObject from "../support/pages/login.PageObject";
import AlertPageObject from "../support/pages/alert.PageObject";

const loginFormObject = new LoginFormPageObject();
const alertObject = new AlertPageObject();

describe('Log in tests', () => {
    beforeEach(() => {
        loginFormObject.visit();
    })

    it('should be able to login with existing credentials', () => {
        loginFormObject.fillForm('valid credentials');

        alertObject.assertAlert('successful login');
    });

    it('should not be able to login with non-existent username', () => {
        loginFormObject.fillForm('with non-existent username');

        alertObject.assertAlert('failed username');
    });

    it('should not be able to login with non-existent password', () => {
        loginFormObject.fillForm('with non-existent password');

        alertObject.assertAlert('failed password');
    });

    it('should not be able to login with blank username field', () => {
        loginFormObject.fillForm('without username');

        alertObject.assertAlert('failed username');
    });

    it('should not be able to login with blank password', () => {
        loginFormObject.fillForm('without password');

        alertObject.assertAlert('failed password');
    });

    it('should not be able to login with blank fields', () => {
        loginFormObject.fillForm('with blank fields');

        alertObject.assertAlert('failed username');
    });
});

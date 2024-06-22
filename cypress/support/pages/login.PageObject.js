import PageObject from "../PageObject";
import userCredentials from "../userCredentials";

class LoginFormPageObject extends PageObject {
    userCredentials = userCredentials;

    get usernameField() {
        return cy.get('#username');
    }

    get passwordField() {
        return cy.get('#password');
    }

    get loginBtn() {
        return cy.get('[type="submit"]');
    }

    typeUsername(username) {
        this.usernameField.type(username);
    }

    typePassword(password) {
        this.passwordField.type(password);
    }

    clickLoginBtn() {
        this.loginBtn.click();
    }

    fillForm(option) {
        if (option === 'valid credentials') {
            this.typeUsername(this.userCredentials.correctUsername);
            this.typePassword(this.userCredentials.correctPassword);
        } else if (option === 'without username') {
            this.typePassword(this.userCredentials.correctPassword);
        } else if (option === 'without password') {
            this.typeUsername(this.userCredentials.correctUsername);
        } else if (option === 'with non-existent username') {
            this.typeUsername(this.userCredentials.unexistingUsername);
            this.typePassword(this.userCredentials.correctPassword);
        } else if (option === 'with non-existent password') {
            this.typeUsername(this.userCredentials.correctUsername);
            this.typePassword(this.userCredentials.unexistingPassword);
        } else if (option === 'with blank fields') {
        } else {
            throw new Error(`Unsupported option: ${option}`);
        }

        this.clickLoginBtn();
    }
}

export default LoginFormPageObject;

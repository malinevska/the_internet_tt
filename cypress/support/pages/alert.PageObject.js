import PageObject from '../PageObject';

class AlertPageObject extends PageObject {
    alerts = {
        successful: 'You logged into a secure area!',
        failedUsername: 'Your username is invalid!',
        failedPassword: 'Your password is invalid!'
    };

    get alert() {
        return cy.get('#flash');
    }

    assertAlert(option) {
        let expectedAlertText;

        if (option === 'successful login') {
            expectedAlertText = this.alerts.successful;
        } else if (option === 'failed username') {
            expectedAlertText = this.alerts.failedUsername;
        } else if (option === 'failed password') {
            expectedAlertText = this.alerts.failedPassword;
        } else {
            throw new Error(`Unsupported option: ${option}`);
        }

        this.alert.should('contain', expectedAlertText);
    }
}

export default AlertPageObject;

import BasePage from "./basePage";

class LoginPage extends BasePage {
    constructor() {
        super("#someselector");
    }

    get userNameInput() {
        return $("#input");
    }

    get passwordInput() {
        return $("#password");
    }

    get loginButton() {
        return $("#login");
    }

    async open() {
        await browser.url("https://somesite/login")
        await this.waitForDisplayed();
    }

    async login(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
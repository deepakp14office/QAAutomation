import userdata from '../data/userdata.json';

export class login {
  constructor(page) {
    this.page = page;

    this.signupLogin = page.getByRole('link', {
      name: /signup\s*\/\s*login/i
    });

    // Select the login email field, not the signup email field
    this.email = page.locator('[data-qa="login-email"]');

    this.password = page.locator('[data-qa="login-password"]');

    this.loginButton = page.locator('[data-qa="login-button"]');
  }

  async openLoginPage() {
    await this.page.goto('https://automationexercise.com/');

    await this.signupLogin.click();
  }

  async filldetails() {
    await this.email.fill(userdata.LoginDetails.email);
    await this.password.fill(userdata.LoginDetails.password);

    await this.loginButton.click();
  }
}
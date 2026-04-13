class LoginPage {

  visit() {
    cy.visit("https://automationexercise.com/login")
  }

  login(email, password) {
    cy.get("input[data-qa='login-email']")
      .should("be.visible")
      .type(email)

    cy.get("input[data-qa='login-password']")
      .should("be.visible")
      .type(password)

    cy.get("button[data-qa='login-button']").click()
  }


  enterEmail(email) {
    cy.get("input[data-qa='login-email']")
      .should("be.visible")
      .type(email)
  }

  enterPassword(password) {
    cy.get("input[data-qa='login-password']")
      .should("be.visible")
      .type(password)
  }

  clickLogin() {
    cy.get("button[data-qa='login-button']").click()
  }

  verifyLoginSuccess() {
    cy.contains("Logged in as").should("be.visible")
    //this.showAlert("Login Successful! ")
  }
  submitLogin() {
    cy.get("button[data-qa='login-button']").click()
  }

  verifyLoggedIn() {
    cy.contains("Logged in as").should("be.visible")
  }
  verifyLoginFailure() {
    cy.contains("Your email or password is incorrect").should("be.visible")
    this.showAlert("Login Failed! ❌")
  }

}

export default new LoginPage()

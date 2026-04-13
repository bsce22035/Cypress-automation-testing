class RegistrationPage {

  visitLogin() {
    // Always go via Home
    cy.visit("https://automationexercise.com")

    // Click Signup/Login
    cy.contains("Signup / Login", { timeout: 20000 })
      .should("be.visible")
      .click()

    // Wait for Signup FORM (not inputs)
    cy.get("form[action='/signup']", { timeout: 20000 })
      .should("exist")
  }

  enterSignupName(name) {
    cy.get("form[action='/signup'] input[name='name']")
      .should("be.visible")
      .type(name)
  }

  enterSignupEmail(email) {
    cy.get("form[action='/signup'] input[name='email']")
      .should("be.visible")
      .type(email)
  }

  clickSignup() {
    cy.get("form[action='/signup'] button[type='submit']")
      .click()
  }

  fillAccountDetails(password) {
    cy.get("#password").should("be.visible").type(password)

    cy.get("#days").select("1")
    cy.get("#months").select("January")
    cy.get("#years").select("2000")

    cy.get("input[name='first_name']").type("Alishba")
    cy.get("input[name='last_name']").type("Zahid")
    cy.get("input[name='address1']").type("Street 10")
    cy.get("select[name='country']").select("India")
    cy.get("input[name='state']").type("Punjab")
    cy.get("input[name='city']").type("Lahore")
    cy.get("input[name='zipcode']").type("54000")
    cy.get("input[name='mobile_number']").type("03001234567")
  }

  submitAccount() {
    cy.contains("Create Account").click()
  }

  verifyAccountCreated() {
    cy.contains("Account Created!").should("be.visible")
    cy.contains("Continue").click()
  }

  verifyEmailAlreadyExists() {
    cy.contains("Email Address already exist!").should("be.visible")
  }
}

export default new RegistrationPage()

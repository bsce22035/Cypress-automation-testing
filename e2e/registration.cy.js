  import registrationPage from "../pages/RegistrationPage"

  describe("User Registration (POM)", () => {

    it("Positive Registration", () => {
      const email = `user${Date.now()}@mail.com`

      registrationPage.visitLogin()
      registrationPage.enterSignupName("Alishba")
      registrationPage.enterSignupEmail(email)
      registrationPage.clickSignup()
      registrationPage.fillAccountDetails("123456")
      registrationPage.submitAccount()
      registrationPage.verifyAccountCreated()
    })

    it("Negative Registration - Existing Email", () => {

      registrationPage.visitLogin()
      registrationPage.enterSignupName("Alishba")
      registrationPage.enterSignupEmail("existing@mail.com") // already registered
      registrationPage.clickSignup()
      registrationPage.verifyEmailAlreadyExists()
    })
  })

import homePage from "../pages/HomePage"
import cartPage from "../pages/CartPage"
import checkoutPage from "../pages/checkoutPage"
import paymentPage from "../pages/PaymentPage"
import loginPage from "../pages/loginpage"

describe("Payment (POM)", () => {

  const email = `user${Date.now()}@mail.com`
  const password = "123456"

  before(() => {
    // REGISTER USER
    cy.visit("https://automationexercise.com/login")
    cy.get("input[name='name']").type("Alishba")
    cy.get("input[data-qa='signup-email']").type(email)
    cy.get("button[data-qa='signup-button']").click()

    cy.get("#password").type(password)
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

    cy.contains("Create Account").click()
    cy.contains("Continue").click()
  })

  it("Positive Payment - Complete payment successfully", () => {

    homePage.visit()
    homePage.addFirstProductToCart()
    homePage.goToCart()

    cartPage.verifyProductInCart()
    cartPage.proceedToCheckout()

    checkoutPage.verifyCheckoutPage()
    checkoutPage.placeOrder()

    paymentPage.enterCardDetails()
    paymentPage.submitPayment()
    paymentPage.verifyPaymentSuccess()
  })

  it("Negative Payment - User not logged in", () => {

  homePage.visit()
  homePage.addFirstProductToCart()
  homePage.goToCart()

  cartPage.verifyProductInCart()
  cartPage.proceedToCheckout()

  // Correct assertion
  cy.contains("Register / Login").should("be.visible")
})


})
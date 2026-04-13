import registrationPage from "../pages/RegistrationPage"
import homePage from "../pages/HomePage"
import cartPage from "../pages/CartPage"
import checkoutPage from "../pages/checkoutPage"
import paymentPage from "../pages/PaymentPage"
import orderPage from "../pages/OrderPage"

describe("Order Retrieval", () => {

  it("Positive - User can retrieve placed order details", () => {

    const email = `user${Date.now()}@mail.com`

    // --- REGISTER ---
    registrationPage.visitLogin()
    registrationPage.enterSignupName("Alishba")
    registrationPage.enterSignupEmail(email)
    registrationPage.clickSignup()
    registrationPage.fillAccountDetails("123456")
    registrationPage.submitAccount()
    registrationPage.verifyAccountCreated()

    // --- PLACE ORDER ---
    homePage.visit()
    homePage.addFirstProductToCart()
    homePage.goToCart()

    cartPage.verifyProductInCart()
    cartPage.proceedToCheckout()

    checkoutPage.placeOrder()

    // --- PAYMENT (USING EXISTING METHODS) ---
    paymentPage.enterCardDetails(
      "Alishba Zahid",
      "4111111111111111",
      "123",
      "12",
      "2028"
    )
    paymentPage.submitPayment()
    paymentPage.verifyPaymentSuccess()

    // --- ORDER RETRIEVAL ---
    orderPage.verifyOrderSuccess()
    orderPage.verifyOrderDetailsVisible()
  })

  it("Negative - User cannot retrieve order history (feature not available)", () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.visit("https://automationexercise.com")

  cy.contains("Orders").should("not.exist")
})

})


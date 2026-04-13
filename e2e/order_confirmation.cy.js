import registrationPage from "../pages/RegistrationPage"
import homePage from "../pages/HomePage"
import cartPage from "../pages/CartPage"
import checkoutPage from "../pages/checkoutPage"
import paymentPage from "../pages/PaymentPage"

describe("Order Confirmation", () => {

  it("Positive - Order confirmation is displayed after successful payment", () => {

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

    // --- PAYMENT ---
    paymentPage.enterCardDetails(
      "Alishba Zahid",
      "4111111111111111",
      "123",
      "12",
      "2028"
    )
    paymentPage.submitPayment()

    // --- ORDER CONFIRMATION ASSERTIONS ---
    cy.url().should("include", "/payment_done")

    cy.get("h2.title.text-center")
      .should("be.visible")
      .and("contain.text", "Order Placed")

    cy.contains("Congratulations").should("exist")
  })

 it("Negative - Cannot access order confirmation without placing an order", () => {
  // Clear cookies and local storage
  cy.clearCookies()
  cy.clearLocalStorage()

  // Visit the cart page with empty cart
  cy.visit("https://automationexercise.com/view_cart")

  // Assert that there are no products in the cart
  cy.get("tr.cart_item").should("have.length", 0)

  // Assert that "Proceed To Checkout" button does NOT exist
  cy.get("a.btn.check_out").should("not.exist")
})




})

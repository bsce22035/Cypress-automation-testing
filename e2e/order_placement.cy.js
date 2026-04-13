import homePage from "../pages/HomePage"
import cartPage from "../pages/CartPage"
import checkoutPage from "../pages/checkoutPage"

describe("Add Product and Proceed to Checkout", () => {

  it("Add product and go to checkout", () => {

    homePage.visit()
    homePage.addFirstProductToCart()
    homePage.goToCart()

    cartPage.verifyProductInCart()
    cartPage.proceedToCheckout()

    // EXPECT LOGIN PROMPT
    checkoutPage.verifyLoginRequired()
  })

  it("Negative Checkout - Without Product", () => {

    homePage.visit()
    homePage.goToCart()

    cy.contains("Cart is empty!").should("be.visible")
  })
})
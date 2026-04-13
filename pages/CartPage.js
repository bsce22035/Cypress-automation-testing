class CartPage {

  verifyProductInCart() {
    cy.get(".cart_info").should("be.visible")
  }

  proceedToCheckout() {
    cy.contains("Proceed To Checkout").should("be.visible").click()
  }
}

export default new CartPage()

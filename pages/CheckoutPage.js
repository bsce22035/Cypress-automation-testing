class CheckoutPage {

  verifyLoginRequired() {
    cy.contains("Register / Login").should("be.visible")
  }

  placeOrder() {
    cy.contains("Place Order").should("be.visible").click()
  }

  verifyCheckoutPage() {
    cy.contains("Checkout").should("be.visible")
  }
  // verifyBrowserAlert(expectedMessage) {
  //   cy.on("window:alert", (text) => {
  //     expect(text).to.contain(expectedMessage)
  //   })
  // }
}

export default new CheckoutPage()

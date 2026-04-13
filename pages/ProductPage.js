class ProductPage {

   addFirstProductToCart() {
    cy.contains("Add to cart").first().click()
    cy.contains("Continue Shopping").click()
  }

  goToCart() {
    cy.contains("Cart").click()
  }
}

export default new ProductPage()

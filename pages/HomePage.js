class HomePage {

  visit() {
    cy.visit("https://automationexercise.com")
  }

  addFirstProductToCart() {
    cy.get(".add-to-cart").first().click()
    cy.contains("Continue Shopping").click()
  }

  goToCart() {
    cy.get("a[href='/view_cart']").first().click()
  }
}

export default new HomePage()

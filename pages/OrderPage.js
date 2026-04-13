class OrderPage {

  verifyOrderSuccess() {
    cy.url().should("include", "/payment_done")
    cy.get("h2.title")
      .should("be.visible")
      .and("contain.text", "Order Placed")
  }

  verifyOrderDetailsVisible() {
    cy.contains("Congratulations").should("exist")
  }

  verifyInvoiceAvailable() {
    cy.contains("Download Invoice").should("be.visible")
  }

  verifyNoOrdersMenu() {
    cy.contains("Orders").should("not.exist")
  }
}

export default new OrderPage()

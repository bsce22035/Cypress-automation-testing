class PaymentPage {

  enterCardDetails() {
    cy.get("input[name='name_on_card']").type("Alishba Zahid")
    cy.get("input[name='card_number']").type("4111111111111111")
    cy.get("input[name='cvc']").type("123")
    cy.get("input[name='expiry_month']").type("12")
    cy.get("input[name='expiry_year']").type("2028")
  }

  submitPayment() {
    cy.get("#submit").click()
  }

  verifyPaymentSuccess() {

    // 1️⃣ Verify URL (MOST IMPORTANT)
    cy.url().should("include", "/payment_done")

    // 2️⃣ Verify heading safely
     cy.get("h2.title")
    .should("be.visible")
    .and("contain.text", "Order Placed!")


    // Optional (extra safety)
    cy.contains("Congratulations").should("exist")

    // this.showAlert("Payment Successful! 🎉")
  }

  submitEmptyPayment() {
    cy.get("#submit").click()
  }

  verifyPaymentFailure() {
    cy.url().should("include", "/payment")
  }
}

export default new PaymentPage()

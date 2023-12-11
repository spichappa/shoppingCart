describe('add to cart', () => {
  it('search for a product', () => {
    cy.visit('https://www.ikea.com/de/de/')

    // cookie accept
    cy.get('#onetrust-accept-btn-handler').click()
    // product search
    cy.get('#ikea-search-input').type("computer table")
    cy.get('#search-box__searchbutton').click()
    // add item to cart
    cy.get('[data-product-number=s29932181] .plp-button-container > button:nth-child(1)').click()
    cy.wait(2000)
    // go to cart
    cy.visit('https://www.ikea.com/de/de/shoppingcart/')

    // verify - product shown in cart
    cy.get('[data-testid=product_list_product_group_items]').should('contain.text', 'LINNMON / ADILS')
  })
})
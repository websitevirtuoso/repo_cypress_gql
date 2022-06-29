import { getCountries } from '../../graphql/queries/getCountries'
// Could not get this working.
// #import GetCountries from '../../graphql/queries/getCountries.gql'

it('should see list of countries', () => {
  cy.log('Working test')
  cy.intercept('POST', '?operation=GetCountries').as('queryGetCountries')
  cy.visit('/')

  cy.toggleSideMenu(true)
  // check menu direct to countries
  cy.getBySel('Region').click()
  cy.getBySel('Countries').click()
  cy.url().should('eq', `${Cypress.config().baseUrl}/countries`)

  // check that Request been made
  cy.wait('@queryGetCountries').then(({ response }) => {
    expect(response.body.data.countries).to.exist
  })

  // check page struct
  cy.getBySel('btn.create').should('not.exist')
  cy.getBySel('btn.remove').should('not.exist')

  cy.getDataTableHeaderLength(4)
  cy.getDataTableBodyLength(4)
})

// TODO: configure webpack to understand `#import`.
it.skip('test with using gql query', () => {
  cy.request({
    log: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: 'https://countries.trevorblades.com/',
    body: JSON.stringify({
      // @ts-ignore
      query: GetCountries
    }),
  }).then(({ body: { data } }) => {
    cy.log(data)
  })
})

it('test with using gql query with graphql-tag', () => {
  cy.request({
    log: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: 'https://countries.trevorblades.com/',
    body: JSON.stringify({
      // get as string.
      query: getCountries?.loc?.source.body
    }),
  }).then(({ body: { data } }) => {
    cy.log(data)
  })
})
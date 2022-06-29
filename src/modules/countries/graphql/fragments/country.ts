import gql from 'graphql-tag'

export const countries = gql`
  fragment CountryFragment on Country {
    code
    name
    phone
    currency
    languages {
      code
      name
      native
    }
  }
`

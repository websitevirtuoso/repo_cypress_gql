// #import "../fragments/country.fragment.gql"
import gql from 'graphql-tag'

export const getCountries = gql`
  query GetCountries {
    countries {
      ...CountryFragment
    }
  }

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

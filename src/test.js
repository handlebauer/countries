import test from 'ava'
import { normalizeCountry } from './normalize-country.js'

test('Should return undefined when null or undefined is passed', t => {
  // @ts-expect-error
  t.is(normalizeCountry(), undefined)
  t.is(normalizeCountry(undefined), undefined)
  t.is(normalizeCountry(null), undefined)
})

test('Should return null when an invalid input is passed', t => {
  t.is(normalizeCountry('blahblahblah'), null)
})

test('Should return alpha2 code when valid input is passed', t => {
  t.is(normalizeCountry('United States of America'), 'US')
  t.is(normalizeCountry('England'), 'GB-ENG')
  t.is(normalizeCountry('GB', { inputType: 'alpha2' }), 'GB')
  t.is(
    normalizeCountry('GBR', { inputType: 'alpha3', returnType: 'name' }),
    'United Kingdom of Great Britain and Northern Ireland'
  )
  t.is(
    normalizeCountry('GB-NIR', { inputType: 'alpha2', returnType: 'name' }),
    'Northern Ireland'
  )
})

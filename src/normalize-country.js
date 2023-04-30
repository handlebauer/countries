import { eqCaseInsensitive, pipe, prop } from '@hbauer/convenience-functions'
import { countries } from './data.js'

/** @typedef {keyof Omit<countries[number], "languages"> } CountryCodeType */

/**
 * @param {string} rawInput
 * @param {{ inputType?: CountryCodeType, returnType?: CountryCodeType }} [opts]
 */
export const normalizeCountry = (
  rawInput,
  { inputType = 'name', returnType = 'alpha2' } = {}
) => {
  /**
   * @param {countries[number]} input
   */
  const eqRawInput = input =>
    pipe(input, prop(inputType), eqCaseInsensitive(rawInput))

  if (rawInput === undefined || rawInput === null) return undefined

  const country = countries.find(eqRawInput)
  const code = country?.[returnType]
  return code || null
}

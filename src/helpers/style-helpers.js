// Colours
const colourReferences = {
  main: '#e5e9da',
  background: 'rgba(38, 43, 35, 1)',
  subtleEmphasis: '#235492',
  neutralEmphasis: '#9E4036',
  loudEmphasis: '#BBDE2A'
}

// Harmonics (Used for whitespace)
const ratio = 1.3;

const harmonicValues = {}
harmonicValues.h0 = 1
harmonicValues.h1 = harmonicValues.h0 * ratio
harmonicValues.h2 = harmonicValues.h1 * ratio
harmonicValues.h3 = harmonicValues.h2 * ratio
harmonicValues.h4 = harmonicValues.h3 * ratio

harmonicValues.s1 = harmonicValues.h0 / ratio
harmonicValues.s2 = harmonicValues.s1 / ratio
harmonicValues.s3 = harmonicValues.s2 / ratio
harmonicValues.s4 = harmonicValues.s3 / ratio

const harmonicsBuilder = {}

for (let i in harmonicValues) {
  harmonicsBuilder[i] = harmonicValues[i] + 'rem'
}


// Exports

export const harmonics = harmonicsBuilder
export const colours = colourReferences
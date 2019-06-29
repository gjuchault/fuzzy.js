export type PrepareOptions = {
  caseSensitive?: boolean
}

export const prepare = (query: string, source: string, opts: PrepareOptions) => {
  if (typeof query !== 'string') {
    throw new TypeError('Expecting query to be a string')
  }

  if (typeof source !== 'string') {
    throw new TypeError('Expecting source to be a string')
  }

  let reshapedQuery = query
  let reshapedSource = source

  if (!opts.caseSensitive) {
    reshapedQuery = query
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    reshapedSource = source
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  return [reshapedQuery, reshapedSource]
}

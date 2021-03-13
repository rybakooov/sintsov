export default function (req, res, next) {
  const hasSlash = req.url.search(/\/$/) > -1
  if (hasSlash && req.url !== '/') {
    const url = req.url
      .replace(/\/$/, '')
      .replace(/\/#/, '#')
      .replace(/\/\?/, '?')

    res.writeHead(301, { Location: url })
    res.end()
  } else {
    next()
  }
}

type Meta = {
  hid: string
  name: string
  content: string
}

export class MetaInfo {
  getDescription(description: string): Meta {
    return { hid: 'description', name: 'description', content: description }
  }

  getKeywords(keyword: string): Meta {
    return { hid: 'keywords', name: 'keywords', content: keyword }
  }

  getNoIndexNoFollow(): Meta {
    return { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
  }
}

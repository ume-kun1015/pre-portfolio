interface meta {
  hid: String
  name: String
  content: String
}

export class MetaInfo {
  getDescription(description: String): meta {
    return { hid: 'description', name: 'description', content: description }
  }

  getKeywords(keyword: String): meta {
    return { hid: 'keywords', name: 'keywords', content: keyword }
  }

  getNoIndexNoFollow(): meta {
    return { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
  }
}

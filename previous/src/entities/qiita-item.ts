export interface QiitaItem {
  coediting: Boolean
  comments_count: Number
  created_at: String
  group?: QiitaItemGroup
  id: String
  likes_count: Number
  private: Boolean
  reactions_count: Number
  tags: QiitaItemTag[]
  title: String
  updated_at: String
  url: String
  page_views_count?: Number
}

interface QiitaItemGroup {
  created_at: String
  id: Number
  name: String
  private: Boolean
  updated_at: String
  url_name: String
}

interface QiitaItemTag {
  name: String
  versions: String[]
}

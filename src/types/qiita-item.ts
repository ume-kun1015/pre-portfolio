export type QiitaItem = {
  coediting: boolean
  comments_count: number
  created_at: string
  group?: QiitaItemGroup
  id: string
  likes_count: number
  private: boolean
  reactions_count: number
  tags: QiitaItemTag[]
  title: string
  updated_at: string
  url: string
  page_views_count?: number
}

type QiitaItemGroup = {
  created_at: string
  id: number
  name: string
  private: boolean
  updated_at: string
  url_name: string
}

type QiitaItemTag = {
  name: string
  versions: string[]
}

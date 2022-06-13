export type tag = {
  label: string
  value: string
  params: Record<string, any>
  query: Record<string, any>
  meta: any
  group: Array<any>
  close?: boolean
}

export type tagState = {
  tagList: Array<tag>
  tag: tag
  tagFirst: tag
}

export type module<T> = {
  state(): T
  mutations?: Record<string, (state: T, data: any) => any>
  actions?: Record<string, (store: module<T>, data: any) => any>
  getters?: Record<string, (state: T) => any>
}

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

export interface user {
  token: string | null
  userInfo: any
}

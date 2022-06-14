interface router {
  path: string
  redirect?: string
  name?: string
  component?(): any
}

export { router }

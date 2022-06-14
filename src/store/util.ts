export function importComponent(name: string) {
  return () => import(`/@/view/${name}/${name}.vue`)
}

export const filterRouter = () => {}

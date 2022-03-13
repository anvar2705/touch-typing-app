export interface IResultTime {
  m: number
  s: number
  ms: number
}

export interface IResultTableItem {
  id: number
  name: string
  template: string
  time: IResultTime
  result: number
}

import { useState, useCallback } from 'react'
let uid = 0

export interface Item {
  key: number
  title: string
}
export type TypeList = Item[]

const useTodolist = () => {
  const [list, setList] = useState<TypeList>([])

  const handleRemove = useCallback((index: number) => {
    setList((v) => v.filter((v, idx) => idx !== index))
  }, [])

  const handleAdd = useCallback((title: string) => {
    setList((v) => [...v, { key: uid++, title }])
  }, [])

  return {
    list,
    handleRemove,
    handleAdd
  }
}

export default useTodolist

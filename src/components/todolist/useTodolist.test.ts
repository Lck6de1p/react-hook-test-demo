import { describe, expect, test } from '@jest/globals'
import { renderHook, act } from '@testing-library/react'
import useTodolist from './useTodolist'

describe('useTodolist', () => {
  test('happy path', async () => {
    const { result } = renderHook(() => useTodolist())
    const { handleAdd, handleRemove } = result.current
    expect(result.current.list.length).toBe(0)
    act(() => {
      handleAdd('吃饭')
    })
    expect(result.current.list.length).toBe(1)
    act(() => {
      handleAdd('睡觉')
    })
    expect(result.current.list.length).toBe(2)
    act(() => {
      handleRemove(1)
    })
    expect(result.current.list.length).toBe(1)
    for (let i = 0; i < 20; i++) {
      act(() => {
        handleAdd(`看书${i}`)
      })
    }
    expect(result.current.list.length).toBe(21)
  })
})

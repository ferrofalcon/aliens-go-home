"use client"

import { useAppDispatch, useAppSelector } from "@/store/store"
import { increment, decrement, reset } from "@/store/slices/counterSlice"

export default function Home() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </main>
  )
}

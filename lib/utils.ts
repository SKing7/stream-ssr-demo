import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// 延迟函数
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

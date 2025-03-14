import React from "react";
import {describe, expect, it, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import About from "../component/about/About";
import {motionValue, MotionValue} from 'framer-motion'
import '@testing-library/jest-dom/vitest'

vi.mock("framer-motion", async (importOriginal) => {
  const originals = await importOriginal<typeof import("framer-motion")>()
  return {
    ...originals,
    useInView : () => true,
    useAnimation: () => ({
      start: vi.fn(), 
      subscribe: vi.fn(), 
    }),
    motion : {
      ...originals.motion,
      div : () => <div data-testid="animate-about-div"/>
    }
  }
})

vi.mock('../component/about/AnimateAboutText', () => ({
  default : ({ children } : { children : React.ReactNode}) => <div data-testid="animate-about-div">{ children }</div>
}))

describe('about component', () => {
  const mockScrollYProgress : MotionValue<number> = motionValue(0)
  render(<About scrollYProgress={mockScrollYProgress} />)

  it("should render AnimateAboutText component", () => {
    expect(screen.getByTestId("animate-about-div")).toBeInTheDocument()
  })
  
  it.each([
    "We Believe",
    "In The Power",
    "Of Great",
    "Desserts"
  ])("should render text : %s", async (text) => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
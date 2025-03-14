import React from "react";
import {describe, expect, it, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import AnimateImage from "../component/AnimateImage";
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
  }
})


describe("should return animte image cover", () => {
  it('should render image cover that animates its height', () => {
    render(<AnimateImage duration={1}/>)
  
    expect(screen.getByTestId("animate-image-cover")).toBeInTheDocument()
  })
})


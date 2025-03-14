import React from "react";
import {describe, expect, it, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import AnimateAboutText from '../component/about/AnimateAboutText'
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

describe("should return animte image cover", () => {
  it('should render image cover that animates its height', () => {
    render(
      <AnimateAboutText>
        <p>Hello, Animation!</p>
      </AnimateAboutText>
    )
  
    expect(screen.getByTestId("animate-about-div")).toBeInTheDocument()
  })
})
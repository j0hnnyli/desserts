import React from "react";
import {describe, expect, it, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import Showcase from "../component/showcase/Showcase";
import {MotionValue, motionValue} from 'framer-motion'
import '@testing-library/jest-dom/vitest'

vi.mock("../component/showcase/ShowcaseContent", () => ({
  default : () => <div data-testid="showcase-content"></div>
}))

vi.mock("../component/showcase/ShowcaseImg", () => ({
  default : () => <div data-testid="showcase-img"></div>
}))

describe("should render showcase", () => { 
  const mockScrollYProgress: MotionValue<number> = motionValue(0);
  render(<Showcase scrollYProgress={mockScrollYProgress}/>)
  
  it("should render the component ShowcaseContent", () => {
    expect(screen.getByTestId("showcase-content")).toBeInTheDocument()
  })
 
  it("should render the component ShowcaseImg", () => {
    expect(screen.getByTestId("showcase-img")).toBeInTheDocument()
  })
})
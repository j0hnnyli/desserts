import React from "react";
import {describe, expect, it, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import ShowcaseImg from "../component/showcase/ShowcaseImg";
import '@testing-library/jest-dom/vitest'

vi.mock("../component/AnimateImage.tsx", () => ({
  default : vi.fn()
}))

describe("should redner showcase images", () => {
  render(<ShowcaseImg/>)

  it("should render the main dessert image", () => {
    expect(screen.getByAltText("dessert")).toBeInTheDocument()
  })
  
  it("should render the rose cake image", () => {
    expect(screen.getByAltText("rose-cake")).toBeInTheDocument()
  })
})
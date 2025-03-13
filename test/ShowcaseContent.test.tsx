import React from "react";
import {describe, expect, it} from 'vitest'
import { render, screen } from '@testing-library/react'
import ShowcaseContent from '../component/showcase/ShowcaseContent'
import '@testing-library/jest-dom/vitest'


describe("Should Render Showcase Section Content", () => {
  render(<ShowcaseContent/>)

  it.each([
    "Dessert",
    "Meets",
    "Happiness",
    "Immerse yourself in a dessert that brings Happiness",
  ])("should render text : %s", (text) => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })
  
})


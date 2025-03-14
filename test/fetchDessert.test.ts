import {describe, expect, it, vi} from 'vitest'
import { getDesserts } from '../lib/fetchDesserts'

describe("getDesserts", () => {
  it("should return an object with a success message and desserts", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        meals: [
          {
            strMeal: "Apam balik",
            strMealThumb: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
            idMeal: "53049",
          },
        ],
      }),
    });

    const desserts = await getDesserts();

    expect(desserts).toEqual({
      message: expect.stringMatching(/success/i),
      data: [
        {
          strMeal: "Apam balik",
          strMealThumb: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
          idMeal: "53049",
        },
      ],
    });
  });

  it("should return an object with an error message and null for desserts", async () => {
    global.fetch = vi.fn().mockRejectedValue({
      message: "Error",
      data: null,
    });

    const desserts = await getDesserts(); 

    expect(desserts).toEqual({
      message: expect.stringMatching(/error/i), 
      data: null,
    });
  });
});

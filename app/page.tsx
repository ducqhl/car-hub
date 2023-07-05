"use client";
import { fetchCars } from "@/api";
import { CustomFilter, Hero, SearchBar, ShowMore, CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FilterProps, Vehicle } from "@/types";
import { useEffect, useState } from "react";

export interface HomeProps {
  searchParams: FilterProps;
}

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState<Vehicle | any>();
  useEffect(() => {
    fetchCars({
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || 10,
      model: searchParams.model || "",
    }).then((cars) => setAllCars(cars));
  }, [searchParams]);

  const isEmptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>

          {!isEmptyData ? (
            <section>
              <div className="home__cars-wrapper">
                {(allCars as Vehicle[]).map((car) => (
                  <CarCard key={car.make + car.model} car={car} />
                ))}
              </div>

              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h1 className="text-black text-xl font-bold">Oops, no results</h1>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";
import { getAllLocations } from "@/api/user";
import { useEffect } from "react";
import { useState } from "react";

const Locations = () => {
  const [locations, setLocations] =
    useState<Awaited<ReturnType<typeof getAllLocations>>>();

  useEffect(() => {
    const fetchLocations = async () => {
      const locations = await getAllLocations({
        take: 5,
        where: {
          business_id: {
            equals: "cm8fg0tkp0001z82wivt8tdni",
          },
        },
      });
      console.log("Locations", locations);
      setLocations(locations);
    };
    fetchLocations();
  }, []);

  return (
    <div>
      <p className="text-3xl">Locations</p>

      <div>
        {locations?.locations.map((loc) => {
          return (
            <div className="border py-2">
              <p>{loc.name}</p>

              <p>{loc.address?.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Locations;

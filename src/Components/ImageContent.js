import React from "react";
import { Divider, Image } from "semantic-ui-react";
import nasakitty from "../Img/nasakitty.jpg";
import mars from "../Img/mars.jpg";
import hurricane from "../Img/hurricane.jpg";

const src = "../Img/nasakitty.jpg";

export const ImageExampleVerticallyAligned = () => (
  <div>
    <Image src={nasakitty} size="small" verticalAlign="top" />{" "}
    <span>
      NASA’s Cloud-Aerosol Transport System, or CATS, is a lidar remote-sensing
      instrument that measured atmospheric aerosols and clouds from the
      International Space Station (ISS). The CATS payload improved our
      understanding of aerosol and cloud properties and interactions, as well as
      demonstrated a low-cost, streamlined approach to developing ISS science
      payloads.
    </span>
    <Divider />
    <Image src={mars} size="small" verticalAlign="middle" />{" "}
    <span>
      NASA will lead an innovative and sustainable program of exploration with
      commercial and international partners to enable human expansion across the
      solar system and to bring back to Earth new knowledge and opportunities.
    </span>
    <Divider />
    <Image src={hurricane} size="small" verticalAlign="bottom" />{" "}
    <span>
      On July 18 at 1:20 a.m. EDT (0520 UTC), the Moderate Resolution Imaging
      Spectroradiometer or MODIS instrument aboard NASA’s Aqua satellite
      provided a visible image of Danas that showed a large storm over Japan’s
      Ryuku Island chain. The image shows that Danas is being affected by
      vertical wind shear, where winds at different levels of the atmosphere
      around the tropical cyclone are pushing against it and affecting the
      storm’s shape. The Joint Typhoon Warning Center noted, “A large area of
      deep convection sheared 60 nautical miles southward of a consolidating
      low-level center.
    </span>
  </div>
);

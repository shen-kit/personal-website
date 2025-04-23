import { List, Stack, Title } from "@mantine/core";
import SectionHeader from "../components/SectionHeader";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

import classes from "./AchievementsSection.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface CardProps {
  title: string;
  listItems: any[];
}

function CarouselCard({ title, listItems }: CardProps) {
  return (
    <Carousel.Slide>
      <Stack
        h="100%"
        justify="start"
        pt="lg"
        pb="xl"
        align="center"
        className={classes.carouselSlide}
      >
        <Title order={4} pb="lg">
          {title}
        </Title>
        <List withPadding mr="xl">
          {listItems}
        </List>
      </Stack>
    </Carousel.Slide>
  );
}

export default function AchievementsSection() {
  const achievementsData = [
    {
      title: "University",
      items: [
        <List.Item>
          <strong>1st place</strong> in the Monash Beginner Competitive
          Programming Competition (2024)
        </List.Item>,
        <List.Item>
          <strong>1st place</strong> in the Monash Association of Coding UI/UX
          Design Hackathon (2024)
        </List.Item>,
        <List.Item>Currently maintaining a 4.0 GPA and 94 WAM</List.Item>,
      ],
    },
    {
      title: "ATAR",
      items: [
        <List.Item>
          Graduated with a <strong>99.95 ATAR</strong> and final grades of:
          <List>
            <List.Item>100.0% for Mathematics Specialist</List.Item>
            <List.Item>99.3% for Chemistry</List.Item>
            <List.Item>97.5% for Mathematics Methods</List.Item>
            <List.Item>96.7% for Physics</List.Item>
            <List.Item>87.6% for Economics</List.Item>
            <List.Item>84.3% for Literature</List.Item>
          </List>
        </List.Item>,
        <List.Item>
          <strong>Chemistry Subject Exhibition</strong> (top student in the
          state)
        </List.Item>,
        <List.Item>
          <strong>General Exhibition</strong> (14th in the state)
        </List.Item>,
      ],
    },
    {
      title: "School Awards",
      items: [
        <List.Item>Academic Excellence Award</List.Item>,
        <List.Item>
          Top 3 in Chemistry, Mathematics Methods, Mathematics Specialist, and
          Physics
        </List.Item>,
        <List.Item>Platinum House Award (achieved in 2020)</List.Item>,
      ],
    },
    {
      title: "Co-Curricular",
      items: [
        <List.Item>
          Played in the Honours division for interschool volleyball (2022)
        </List.Item>,
        <List.Item>
          <strong>Started a barbershop quartet</strong>, performed at primary
          schools and our own graduation ceremony (2022)
        </List.Item>,
        <List.Item>
          Completed over <strong>110 hours of community service</strong> during
          senior highschool (2020-2022)
        </List.Item>,
        <List.Item>
          Section leader in the Symphony Orchestra and Senior Wind Orchestra
          (2022)
        </List.Item>,
        <List.Item>
          Member of the Symphony Orchestra, Senior Wind Orchestra, Boys Chamber
          Choir, Mixed Chamber Choir, and Chorale (varied from 2019-2022)
        </List.Item>,
        <List.Item>
          Won <strong>2 ICAS Science medals</strong> (top in the state) (2019,
          2021)
        </List.Item>,
        <List.Item>
          Came second in the state in the Microsoft AI For Good Challenge (2020)
        </List.Item>,
      ],
    },
    {
      title: "University Scholarship Offers",
      items: [
        <List.Item>
          <strong>UNSW</strong>: Scientia Scholarship
        </List.Item>,
        <List.Item>
          <strong>University of Melbourne</strong>: Chancellor's Scholarship
        </List.Item>,
        <List.Item>
          <strong>Monash University</strong>: Sir John Monash Scholarship for
          Distinction
        </List.Item>,
        <List.Item>
          <strong>UWA</strong>: Lawrence Scholarship
        </List.Item>,
        <List.Item>
          <strong>Curtin University</strong>: Top Excellence Scholarship
        </List.Item>,
      ],
    },
  ];

  const slides = achievementsData.map((e) =>
    CarouselCard({ title: e.title, listItems: e.items }),
  );

  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <Stack
      justify="center"
      align="center"
      gap="18%"
      mih="100vh"
      id="achievements-section"
    >
      <SectionHeader number="1" text="Achievements" />
      <Carousel
        mt="xl"
        slideSize="60%"
        slideGap="xl"
        includeGapInSize={false}
        withIndicators
        speed={32}
        classNames={classes}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </Stack>
  );
}

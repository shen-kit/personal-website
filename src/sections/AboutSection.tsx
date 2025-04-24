import { Flex, Stack, Text, Image } from "@mantine/core";

import AboutPicture from "../assets/oahs.jpg";
import SectionHeader from "../components/SectionHeader";

export default function AboutSection() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      gap="18%"
      mih="100vh"
      id="about-section"
    >
      <Image
        className="image-shadow"
        src={AboutPicture}
        h="35vw"
        w="25vw"
      ></Image>
      <Stack gap="xl">
        <SectionHeader number="0" text="About Me" />
        <Text size="lg">
          Shen-Kit graduated from Perth Modern School with a 99.95 ATAR, and is
          currently studying Software Engineering at Monash University. He has
          always been involved in many extracurricular activities, including
          music, basketball, volleyball, community service soup kitchens, and
          academic competitions. Years of researching and experimenting with
          productivity has enabled him to excel academically while playing in 6
          ensembles, teaching himself to code, starting a YouTube channel (with
          over 500K views!), making time for social activities, and working out
          to improve his fitness and health.
        </Text>
      </Stack>
    </Flex>
  );
}

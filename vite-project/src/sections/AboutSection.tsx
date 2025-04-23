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
      <Stack gap="lg">
        <SectionHeader number="0" text="About Me" />
        <Text size="lg">
          Shen-Kit graduated from Perth Modern School in 2022 with an ATAR of
          99.95, and is currently studying Software Engineering at Monash
          University. He has always been involved in many extracurricular
          activities, including music, basketball, volleyball, community service
          soup kitchens, and academic competitions. He loves researching and
          experimenting with productivity in the hopes of achieving as much as
          he possibly can. This has allowed him to excel academically while
          simultaneously playing in 6 ensembles, teaching himself to code,
          starting a YouTube channel (with 500K views), regularly making time
          for social activities, and working out to improve his fitness and
          health.
        </Text>
      </Stack>
    </Flex>
  );
}

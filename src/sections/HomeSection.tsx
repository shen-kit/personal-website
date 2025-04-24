import {
  Flex,
  Text,
  Stack,
  Title,
  Group,
  Image,
  useMantineTheme,
  Box,
  Anchor,
} from "@mantine/core";
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa6";

import ProfilePicture from "../assets/profilePic.jpg";
import { useEffect, useState } from "react";

const HomeSection = () => {
  const theme = useMantineTheme();

  const maxScrollDownOpacity = 0.5;
  const [scrollDownOpacity, setScrollDownOpacity] =
    useState(maxScrollDownOpacity);

  useEffect(() => {
    const handleScroll = () => {
      const fadeOutEnd = 200; // opacity = 0 after 300px

      setScrollDownOpacity(
        Math.max(0, maxScrollDownOpacity * (1 - window.scrollY / fadeOutEnd)),
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        direction="row"
        gap="18%"
        mih="100vh"
        id="home-section"
      >
        <Stack gap="lg">
          <Stack gap="0">
            <Title order={2} className="text-shadow scale-on-hover">
              Hey there, I'm
            </Title>
            <Title
              order={1}
              c={theme.colors.orange[3]}
              className="text-shadow-sm scale-on-hover"
            >
              Shen-Kit Hia.
            </Title>
          </Stack>
          <Text size="lg" className="scale-on-hover">
            I’m currently studying Software Engineering at Monash University,
            and am passionate about coding, productivity, and fitness.
          </Text>
          <Group>
            <Anchor
              className="scale-large-on-hover bright-on-hover"
              href="https://www.linkedin.com/in/shen-kit-hia/"
            >
              <FaLinkedinIn size="1.5rem" />
            </Anchor>
            <Anchor
              className="scale-large-on-hover bright-on-hover"
              href="https://github.com/shen-kit"
            >
              <FaGithub size="1.5rem" />
            </Anchor>
            <Anchor
              className="scale-large-on-hover bright-on-hover"
              href="https://www.youtube.com/@PracticalProgramming"
            >
              <FaYoutube size="1.5rem" />
            </Anchor>
          </Group>
        </Stack>
        <Image
          className="image-shadow"
          src={ProfilePicture}
          h="35vw"
          w="28vw"
        ></Image>
      </Flex>

      <Text
        style={{
          fontSize: "1rem",
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
        className="bright-on-hover"
        opacity={scrollDownOpacity}
        onClick={() =>
          document
            .getElementById("about-section")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        ↓ Scroll down
      </Text>
    </Box>
  );
};

export default HomeSection;

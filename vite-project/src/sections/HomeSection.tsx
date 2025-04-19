import {
  Flex,
  Text,
  Stack,
  Title,
  Group,
  Image,
  useMantineTheme,
  Box,
} from "@mantine/core";
import {
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

import ProfilePicture from "../assets/profilePic.jpg";
import { useEffect, useState } from "react";

const HomeSection = () => {
  const theme = useMantineTheme();
  const aboutSection = document.getElementById("about-section");
  const [scrollDownOpacity, setScrollDownOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxOpacity = 0.5;
      const fadeOutEnd = 200; // opacity = 0 after 300px

      setScrollDownOpacity(
        Math.max(0, maxOpacity * (1 - window.scrollY / fadeOutEnd)),
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
            <a className="scale-large-on-hover bright-on-hover">
              <FaLinkedinIn size="1.5rem" />
            </a>
            <a className="scale-large-on-hover bright-on-hover">
              <FaGithub size="1.5rem" />
            </a>
            <a className="scale-large-on-hover bright-on-hover">
              <FaYoutube size="1.5rem" />
            </a>
            <a className="scale-large-on-hover bright-on-hover">
              <FaInstagram size="1.5rem" />
            </a>
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
          opacity: scrollDownOpacity,
          cursor: "pointer",
        }}
        className="bright-on-hover"
        onClick={() => aboutSection?.scrollIntoView({ behavior: "smooth" })}
      >
        ↓ Scroll down
      </Text>
    </Box>
  );
};

export default HomeSection;

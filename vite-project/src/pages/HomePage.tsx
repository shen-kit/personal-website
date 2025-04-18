import { Flex, Text, Stack, Title, Group, Button, Image, useMantineTheme } from '@mantine/core';
import { FaLinkedinIn, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa6';

import ProfilePicture from '../assets/profilePic.jpg'

const HomePage = () => {

  const theme = useMantineTheme();

  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      gap="20%"
    >
      <Stack>
        <Title order={2} className="text-shadow"> Hey there, I'm</Title>
        <Title c={theme.colors.orange[3]} order={1} className="text-shadow-sm">Shen-Kit Hia.</Title>
        <Text size="xl">I’m currently studying Software Engineering at Monash University, and am passionate about coding, productivity, and fitness.</Text>
        <Group gap="xs">
          <Button variant="transparent"><FaLinkedinIn /></Button>
          <Button variant="transparent"><FaGithub /></Button>
          <Button variant="transparent"><FaYoutube /></Button>
          <Button variant="transparent"><FaInstagram /></Button>
        </Group>
      </Stack>
      <Image src={ProfilePicture} h="30vw" w="25vw"></Image>
    </Flex>
  );
};

export default HomePage;


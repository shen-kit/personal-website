import { Flex, Text, Stack, Title, Group, Image, useMantineTheme } from '@mantine/core';
import { FaLinkedinIn, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa6';

import ProfilePicture from '../assets/profilePic.jpg'

const HomePage = () => {

  const theme = useMantineTheme();

  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      gap="22%"
    >
      <Stack gap="lg">
        <Stack gap="0">
          <Title order={2} className="text-shadow scale-on-hover"> Hey there, I'm</Title>
          <Title
            order={1}
            c={theme.colors.orange[3]}
            className="text-shadow-sm scale-on-hover"
          >
            Shen-Kit Hia.
          </Title>
        </Stack>
        <Text size="lg" className='scale-on-hover'>I’m currently studying Software Engineering at Monash University, and am passionate about coding, productivity, and fitness.</Text>
        <Group>
          <a className='scale-large-on-hover bright-on-hover'><FaLinkedinIn size="1.5rem" /></a>
          <a className='scale-large-on-hover bright-on-hover'><FaGithub size="1.5rem" /></a>
          <a className='scale-large-on-hover bright-on-hover'><FaYoutube size="1.5rem" /></a>
          <a className='scale-large-on-hover bright-on-hover'><FaInstagram size="1.5rem" /></a>
        </Group>
      </Stack>
      <Image src={ProfilePicture} h="30vw" w="25vw"></Image>
    </Flex>
  );
};

export default HomePage;


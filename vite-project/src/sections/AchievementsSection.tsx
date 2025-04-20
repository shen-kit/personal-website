import { Stack, Accordion, List } from "@mantine/core";
import SectionHeader from "../components/SectionHeader";

export default function AchievementsSection() {
  const achievementsData = [
    {
      title: "University",
      items: [
        "1st place in the Monash Beginner Competitive Programming Competition (2024)",
        "1st place in the Monash Association of Coding UI/UX Design Hackathon (2024)",
        "Currently maintaining a 4.0 GPA and 94 WAM",
      ],
    },
  ];

  const achievements = achievementsData.map((e) => (
    <Accordion.Item key={e.title} value={e.title}>
      <Accordion.Panel>
        <List>
          {e.items.map((item) => (
            <List.Item>{item}</List.Item>
          ))}
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack
      justify="center"
      align="center"
      gap="18%"
      mih="100vh"
      id="achievements-section"
    >
      <SectionHeader number="1" text="Achievements" />
      {achievements}
    </Stack>
  );
}

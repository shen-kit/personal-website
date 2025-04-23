import { AppShell, Group, Anchor, Flex } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

export default function Layout(props: any) {
  const pinned = useHeadroom({ fixedAt: 120 });

  const homeSection = document.getElementById("home-section");
  const aboutSection = document.getElementById("about-section");
  const achievementsSection = document.getElementById("achievements-section");

  return (
    <AppShell
      header={{ height: 72, collapsed: !pinned, offset: false }}
      withBorder={false}
    >
      <AppShell.Header>
        <Flex justify="space-between" pl="xl" pr="xl">
          <Anchor
            className="logo"
            onClick={() => homeSection?.scrollIntoView({ behavior: "smooth" })}
          >
            SK
          </Anchor>
          <Group gap="3rem" justify="flex-end" mx="1rem">
            <Anchor
              className="nav-link"
              onClick={() =>
                aboutSection?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </Anchor>
            <Anchor
              className="nav-link"
              onClick={() =>
                achievementsSection?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Achievements
            </Anchor>
            <Anchor className="nav-link">Experience</Anchor>
            <Anchor className="nav-link">Projects</Anchor>
            <Anchor className="nav-link">Resume</Anchor>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Main pl="9%" pr="9%" display="grid">
        {props.children}
      </AppShell.Main>
    </AppShell>
  );
}

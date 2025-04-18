import { AppShell, Group, Anchor, rem, Flex } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

export default function Layout(props: any) {

  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 72, collapsed: !pinned, offset: false }}
      withBorder={false}
    >
      <AppShell.Header>
        <Flex
          justify="space-between"
          pl="xl"
          pr="xl"
        >
          <Anchor className="logo">SK</Anchor>
          <Group gap="3rem" justify='flex-end' mx="1rem">
            <Anchor className="nav-link">About Me</Anchor>
            <Anchor className="nav-link">Achievements</Anchor>
            <Anchor className="nav-link">Experience</Anchor>
            <Anchor className="nav-link">Projects</Anchor>
            <Anchor className="nav-link">Resume</Anchor>
          </Group>
        </Flex>
      </AppShell.Header>

      <AppShell.Main
        pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
        pl="9%"
        pr="9%"
        display="grid"
      >
        {props.children}
      </AppShell.Main>
    </AppShell>
  );
}

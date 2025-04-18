import { AppShell, Group, rem } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";

export default function Layout(props: any) {

  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }} padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <Group h="100%" px="md" grow>
          <a>Home</a>
          <Group gap="xl" justify='flex-end' mx="1rem">
            <a>About Me</a>
            <a>Achievements</a>
            <a>Experience</a>
            <a>Projects</a>
            <a>Resume</a>
          </Group>
        </Group>
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

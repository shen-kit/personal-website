import { Group, Title, useMantineTheme } from "@mantine/core";

export default function SectionHeader(props: any) {
  const theme = useMantineTheme();
  return (
    <Group className="text-shadow scale-on-hover">
      <Title
        className="orange"
        order={3}
        fw={200}
        ff={theme.fontFamilyMonospace}
      >
        {props.number}.
      </Title>
      <Title order={3}>{props.text}</Title>
    </Group>
  );
}

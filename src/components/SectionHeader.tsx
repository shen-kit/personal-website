import { Group, Title, useMantineTheme } from "@mantine/core";
import classes from "./SectionHeader.module.css";

export default function SectionHeader(props: any) {
  const theme = useMantineTheme();
  return (
    <Group className="text-shadow scale-on-hover">
      <Title
        className={classes.orange}
        order={3}
        fw={200}
        ff={theme.fontFamilyMonospace}
      >
        {props.number}.
      </Title>
      <Title c={theme.colors.gray[2]} order={3}>
        {props.text}
      </Title>
    </Group>
  );
}

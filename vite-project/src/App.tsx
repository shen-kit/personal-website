import '@mantine/core/styles.css'
import './styles.css'
import { createTheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

import HomePage from './pages/HomePage';
import Layout from './Layout';


const theme = createTheme({
  primaryColor: "gray",
  colors: {
    orange: [
      "#ffeae8",
      "#ffd3d0",
      "#fba5a0",
      "#f7756d",
      "#f44c41",
      "#f23225",
      "#f22316",
      "#d8150b",
      "#c10d07",
      "#a90003"
    ],
  },
  fontFamily: 'Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontFamilyMonospace: 'source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace',
  headings: {
    fontFamily: "Roboto",
    fontWeight: "600",
    sizes: {
      h1: {
        fontWeight: "600",
        fontSize: "4rem",
      },
      h2: {
        fontSize: "3rem",
        fontWeight: "300",
      },
      h3: {
        fontSize: "2rem",
      },
    },
  },
})


export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Layout>
        <HomePage />
      </Layout>
    </MantineProvider>
  );
}


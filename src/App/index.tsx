import * as React from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import ListPage from "../routes/ListPage";
import NewReceipePage from "../routes/NewReceipePage";
import NotFoundPage from "../routes/NotFoundPage";
import styled from "../styled-components";
import { baseFontSize, theme } from "../styles";

const StyledApp = styled.div`
  max-width: 70ch;
  margin: auto;

  color: ${props => props.theme.colours.text};
  font-size: ${baseFontSize}px;
  font-family: ${props => props.theme.fonts.text};

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ::selection {
    background: ${props => props.theme.colours.accent};
  }
  ::-moz-selection {
    background: ${props => props.theme.colours.accent};
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledApp className="ph2">
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/new" component={NewReceipePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </StyledApp>
  </ThemeProvider>
);

export default App;

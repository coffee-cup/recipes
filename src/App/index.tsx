import * as React from "react";
import { Route, Switch } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoadingPage from "../components/LoadingPage";
import Page from "../components/Page";
import { useRecipes } from "../database";
import { recipeToSlug } from "../models";
import ListPage from "../routes/ListPage";
import NewReceipePage from "../routes/NewReceipePage";
import NotFoundPage from "../routes/NotFoundPage";
import RecipePage from "../routes/RecipePage";
import styled from "../styled-components";
import { baseFontSize, theme } from "../styles";

const StyledApp = styled.div`
  max-width: 70ch;
  margin: auto;
  overflow-x: hidden;

  color: ${props => props.theme.colours.text};
  font-size: ${baseFontSize}px;
  font-family: ${props => props.theme.fonts.text};
  line-height: 1.6;

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

const RecipePageWithProps = (props: RouteComponentProps<{ name: string }>) => {
  const { error, loading, value } = useRecipes();

  if (loading) {
    return <LoadingPage />;
  }

  if ((!loading && error) || value == null) {
    return <Page>Error getting recipe</Page>;
  }

  const recipe = value.filter(
    r => recipeToSlug(r) === props.match.params.name,
  )[0];

  if (!recipe) {
    return <NotFoundPage />;
  }

  return <RecipePage recipe={recipe} />;
};

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledApp className="ph3">
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/new" component={NewReceipePage} />
        <Route exact path="/:name" component={RecipePageWithProps} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </StyledApp>
  </ThemeProvider>
);

export default App;

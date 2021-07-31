import styled from 'styled-components';
import Title from "./Title";
import Flex from "./Flex";
import Console from "./Console";
import Button from "./Button";

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background: black;
    padding: 30px;
    box-sizing: border-box;
`

const App = () => {
  return (
    <AppWrapper>
      <Flex justify={"center"}>
        <Title >some text</Title>
      </Flex>
      <Flex align={"flex-end"}>
        <Console />
        <Button outlined>Отправить</Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;

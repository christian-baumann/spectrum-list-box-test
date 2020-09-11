import React from 'react';
import { Provider, defaultTheme, Button, Flex, ListBox, Item, Text } from '@adobe/react-spectrum';
import './App.css';

function App() {
  const options1 = [
    { id: 1, name: 'Aardvark', description: 'Aardvark Description' },
    { id: 2, name: 'Cat', description: 'Cat Description' },
    { id: 3, name: 'Dog', description: 'Dog Description' },
    { id: 4, name: 'Kangaroo', description: 'Kangaroo Description' },
    { id: 5, name: 'Koala', description: 'Koala Description' }
  ];
  const options2 = [
    { id: 6, name: 'Penguin', description: 'Penguin Description' },
    { id: 7, name: 'Snake', description: 'Snake Description' },
    { id: 8, name: 'Turtle', description: 'Turtle Description' },
    { id: 9, name: 'Wombat', description: 'Wombat Description' }
  ];
  const [ items, setItems ] = React.useState(options1);
  const changeOptions = () => {
    setItems(options2)
  }

  return (
    <Provider theme={defaultTheme}>
      <Flex direction="column">
        <ListBox items={items}>{(item) => (
          <Item key={'item' + item.id} textValue={item.name}>
            <Text>{item.name}</Text>
            <Text slot="description">{item.description}</Text>
          </Item>)}
        </ListBox>
        <Button variant="cta" onPress={changeOptions}>Change options</Button>
      </Flex>
    </Provider>
  );
}

export default App;

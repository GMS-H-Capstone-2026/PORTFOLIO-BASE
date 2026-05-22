import './App.css';

import { Container } from './components/layout/container/Container.jsx';
import { Grid } from './components/layout/Grid/Grid.jsx';
import { Button } from './components/ui/button/Button.jsx';
import { Card } from './components/ui/card/Card.jsx';
import { Divider } from './components/ui/divider/Divider.jsx';

function App() {
    return (
        <Container>
            <Grid>
                <Grid.Item>
                    <Card>
                        <h1>Card 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                    </Card>
                </Grid.Item>
                <Grid.Item>
                    <Card style={{ flexDirection: 'column' }}>
                        <h1>Card 2</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                        <Divider text="good" color="#33ff28" fontSize="1rem" borderWidth="2px" />
                        <Button style={{ backgroundColor: '#38448b' }}>good</Button>
                    </Card>
                </Grid.Item>
                <Grid.Item>
                    <Card>
                        <h1>Card 3</h1>
                        <Divider text="good" orientation="horizontal" color="#33ff28" fontSize="1rem" borderWidth="2px" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                    </Card>
                </Grid.Item>
            </Grid>
        </Container>
    );
}

export default App;

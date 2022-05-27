import {
  Button,
  // Accordion,
  // AccordionContent,
  // AccordionTrigger,
  TextField,
  Card,
} from '@brolly-ui/components';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => (
  <div>
    <h1>Dashboard</h1>
    <Card
      title="title"
      subTitle="subTitle"
      size="large"
      style={{ backgroundColor: '#e3e3e3' }}
    >
      <TextField
        label="Default"
        name="name"
        outline={false}
        type="date"
        style={{ marginBottom: 20 }}
      />
      <TextField
        label="Default"
        name="name"
        inputType="email"
        outline={false}
        iconDefault
        iconPosition="right"
      />
    </Card>
    <Button size="small" appearance="secondary">
      Home
    </Button>
    <Button size="medium" appearance="secondary">
      Home
    </Button>
    <Button appearance="approve" as="a" href="#" size="large">
      asLink
    </Button>
    <Button size="large" appearance="secondary" disabled>
      Home
    </Button>
    <Button appearance="approve" as="a" href="#" disabled size="large">
      asLink
    </Button>
    <Link to="/">
      <Button appearance="secondary" disabled margin="1rem" size="large">
        Link
      </Button>
    </Link>
    <Link to="/">
      <Button appearance="secondary" margin="1rem" size="large">
        Link
      </Button>
    </Link>
  </div>
);

export default Dashboard;

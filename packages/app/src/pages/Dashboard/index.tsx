import {
  Button,
  // Accordion,
  // AccordionContent,
  // AccordionTrigger,
  TextField,
  Card,
  Separator,
} from '@brolly-ui/components';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => (
  <div>
    <h1>Dashboard</h1>
    <Separator color="#f00" />
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
    <Button size="small" variant="secondary">
      Home
    </Button>
    <Button size="medium" variant="secondary">
      Home
    </Button>
    <Button variant="approve" as="a" href="#" size="large">
      asLink
    </Button>
    <Button size="large" variant="secondary" disabled>
      Home
    </Button>
    <Button variant="approve" as="a" href="#" disabled size="large">
      asLink
    </Button>
    <Link to="/">
      <Button variant="secondary" disabled margin="1rem" size="large">
        Link
      </Button>
    </Link>
    <Link to="/">
      <Button variant="secondary" margin="1rem" size="large">
        Link
      </Button>
    </Link>
  </div>
);

export default Dashboard;

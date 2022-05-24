import { Button } from '@brolly-ui/components';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => (
  <div>
    <h1>Dashboard</h1>
    <Button size="small" appearance="secondary">
      Home
    </Button>
    <Button size="medium" appearance="secondary">
      Home
    </Button>
    <Button size="large" appearance="secondary" disabled>
      Home
    </Button>
    <Button appearance="approve" as="a" href="#" size="large">
      asLink
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

import { Box } from '@mui/material';
import Footer from '../Shared/Footer';
import Hero from './Hero';

/** TODO:
 * ✅ non-user navbar
 * add homepage body
 *
 */
const HomePage = () => {
  return (
    <Box display='flex' flexDirection='column' flex='1'>
      <Hero />
      <Footer />
    </Box>
  );
};

export default HomePage;

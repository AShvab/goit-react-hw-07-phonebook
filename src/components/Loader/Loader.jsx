import { Dna } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

const Loader = () => {
  return (
    <Wrap>
      <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </Wrap>
  );
};

export default Loader;

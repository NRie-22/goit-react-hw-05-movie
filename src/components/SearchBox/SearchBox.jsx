import { Wrapper, Input, Icon } from './SearchBox.styled';
import PropTypes from 'prop-types';

const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Icon />
      </form>
    </Wrapper>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

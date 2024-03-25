import { PropTypes } from 'prop-types';

const SigleTag = ({tag}) => {
    return (
        <h2>{tag}</h2>
    );
};

SigleTag.propTypes = {
    tag:PropTypes.string.isRequired,
};

export default SigleTag;
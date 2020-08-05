import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const ShareBtn = ({ type, id }) => {
  const [share, setShare] = useState('');
  return (
    <div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
          setShare('Link copiado!');
        }}
      >
        <img data-testid="share-btn" src={shareIcon} alt="share" />
      </button>
      {share}
    </div>
  );
};

ShareBtn.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ShareBtn;

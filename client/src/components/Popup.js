import React, {useEffect, useRef} from 'react';

function Popup(props) {
  const popUpRef = useRef(null);

  const handleClose = () => {
    props.setTrigger(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popUpRef]);

  return props.trigger ? (
    <div className='popup' ref={popUpRef}>
      <div className='popup-inner'>
        { props.children }
      </div>
    </div>
  ) : null;
}

export default Popup;
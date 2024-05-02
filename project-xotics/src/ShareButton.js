import React from 'react';

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      })
      .then(() => console.log('URL shared successfully'))
      .catch(error => console.error('Error sharing URL:', error));
    } else {
      const url = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url)
          .then(() => alert('URL copied to clipboard'))
          .catch(error => console.error('Error copying URL:', error));
      } else {
        alert('Sharing is not supported in this browser. You can copy the URL manually.');
      }
    }
  };

  return (
    <button onClick={handleShare}>Share</button>
  );
};

export default ShareButton;

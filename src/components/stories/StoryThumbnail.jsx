// import React from 'react';
// import PropTypes from 'prop-types';

// const StoryThumbnail = ({ user, onClick }) => (
//     <div
//         className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity min-w-[80px]"
//         onClick={onClick}
//     >
//         <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-purple-500">
//             <img
//                 src={user.avatar}
//                 alt={user.name}
//                 className="w-full h-full object-cover rounded-full border-2 border-white"
//             />
//         </div>
//         <span className="mt-2 text-sm text-gray-700 truncate max-w-[80px]">
//       {user.name}
//     </span>
//     </div>
// );

// StoryThumbnail.propTypes = {
//     user: PropTypes.shape({
//         avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//     }).isRequired,
//     onClick: PropTypes.func.isRequired,
// };

// export default StoryThumbnail;









import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/scss/stories.scss';

const StoryThumbnail = ({ user, onClick }) => (
  <div className="story-thumbnail" onClick={onClick}>
    <div className="thumbnail-container">
      <img
        src={user.avatar}
        alt={user.name}
      />
    </div>
    <span className="thumbnail-name">
      {user.name}
    </span>
  </div>
);

StoryThumbnail.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StoryThumbnail;
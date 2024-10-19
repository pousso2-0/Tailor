import React from "react";
const PostContent = ({ content }) => {
    return (
        <div className="mt-2">
            <p className="text-dark text-capitalize" style={{ lineHeight: '1.6' }}>
                {content}
            </p>
        </div>
    );
};

export default PostContent
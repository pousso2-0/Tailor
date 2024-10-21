import React from 'react';
import InteractiveStories from '../../components/stories/InteractiveStories';

const Stories = () => {
    return (
            <div className="container mx-auto py-8">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <InteractiveStories />
                </div>
            </div>
    );
};

export default Stories;
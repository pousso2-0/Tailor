import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PostToolbarItem from './PostToolbarItem';

export default function PostToolbar() {
  return (
    <div className="card-post-toolbar">
      <Dropdown>
        <Dropdown.Toggle id="post-option" as="span">
          <span className="material-symbols-outlined">more_horiz</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="m-0 p-0">
          <PostToolbarItem icon="save" title="Save Post" description="Add this to your saved items" />
          <PostToolbarItem icon="cancel" title="Hide Post" description="See fewer posts like this." />
          <PostToolbarItem icon="person_remove" title="Unfollow User" description="Stop seeing posts but stay friends." />
          <PostToolbarItem icon="notifications" title="Notifications" description="Turn on notifications for this post" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

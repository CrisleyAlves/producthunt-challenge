import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "../avatar/Avatar";

type Post = {
  name: string;
  tagline: string;
  votesCount: number;
  url: string;
  thumbnail?: {
    url: string;
  };
};

type PostListUIProps = {
  posts?: {
    cursor: string;
    node: Post;
  }[];
};

export default function PostListUI({ posts = [] }: PostListUIProps) {
  return (
    <ul className="post__list">
      {posts.map(({ cursor, node: post }, index) => {
        return (
          <li
            className="post__list__item card card--rounded"
            key={`${cursor}-${index}`}
          >
            <div className="post">
              <Avatar
                classNames="avatar--rounded"
                avatarUrl={post?.thumbnail?.url || ""}
                altText="post iamge"
                ariaDescription="post iamge"
              />

              <div className="post__content">
                <h2 className="post__title">{post.name}</h2>
                <p className="post__description">{post.tagline}</p>
                <a href={post.url} target="_blank" className="post__link">
                  visit
                </a>
              </div>

              <div className="post__count">
                <FontAwesomeIcon className="icon" icon={faHeart} />
                <p className="post__count__value">{post.votesCount}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

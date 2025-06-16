import React from "react";

import type { PostType } from "@types";

import PostListUI from "@components/posts/PostListUI";
import Tab from "@components/tab/Tab";
import Search from "@components/search/Search";
import Header from "@components/header/Header";

const PostsUI = React.memo(function PostsUI({
  setShowSearchForm,
  onClickClearSearchForm,
  onSubmitSearchForm,
  selectedTab,
  onClickTabItem,
  onChangeDate,
  posts = [],
  postDate,
  showSearchForm = false,
}: {
  setShowSearchForm: (show: boolean) => void;
  onClickClearSearchForm: () => void;
  onSubmitSearchForm: (topic: string) => void;
  selectedTab: string;
  onClickTabItem: (tabName: string) => void;
  onChangeDate: (dateString: string) => void;
  posts?: PostType[];
  postDate?: Date | null;
  showSearchForm?: boolean;
}) {
  const handleOnChangeDate = (dateString: string) => {
    if (!dateString) return;
    onChangeDate(dateString);
  };

  const handleOnSubmitSearchForm = (e) => {
    e.preventDefault();
    const topic = (e.target as HTMLFormElement).topic.value;
    onSubmitSearchForm(topic);
  };

  return (
    <>
      <Header
        handleOnChangeDate={handleOnChangeDate}
        postDate={postDate}
        setShowSearchForm={setShowSearchForm}
      />

      <Search
        showSearchForm={showSearchForm}
        onClickClearSearchForm={onClickClearSearchForm}
        handleOnSubmitSearchForm={handleOnSubmitSearchForm}
      />

      <Tab onClickTabItem={onClickTabItem} selectedTab={selectedTab} />

      <PostListUI posts={posts} />
    </>
  );
});

export default PostsUI;

import { useState, useEffect, useMemo, useCallback } from "react";

import { NUMBER_OF_POSTS, POST_ORDER_TYPE } from "@config/constants";
import { getPostsParams, previousDay } from "@utils/DateUtils";
import usePostsQuery from "@hooks/usePostsQuery";
import usePageBottom from "@hooks/usePageBottom";

import PostsUI from "@components/PostsUI";
import Message from "@components/message/Message";
import FloatingWidget from "@components/floatingWidget/FloatingWidget";
import useFloatingWidget from "@hooks/useFloatingWidget";

const INITIAL_DATE = new Date();

export default function PostsContainer() {
  const isAtPageBottom = usePageBottom();
  const showFloatingWidget = useFloatingWidget();

  const [selectedTab, setSelectedTab] = useState(POST_ORDER_TYPE.POPULAR.label);
  const [postDate, setPostDate] = useState(INITIAL_DATE);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchTopic, setSearchTopic] = useState("");

  const [newest, setNewest] = useState({
    data: [],
    endCursor: null,
  });

  const [popular, setPopular] = useState({
    data: [],
    endCursor: null,
  });

  const isNewest = selectedTab === POST_ORDER_TYPE.NEWEST.label;
  const currentState = isNewest ? newest : popular;
  const setCurrentState = isNewest ? setNewest : setPopular;
  const orderType = isNewest
    ? POST_ORDER_TYPE.NEWEST.value
    : POST_ORDER_TYPE.POPULAR.value;

  const { loading, data, refetch, error } = usePostsQuery({
    topic: searchTopic,
    first: NUMBER_OF_POSTS,
    order: orderType,
    postedBefore: postDate,
    postedAfter: previousDay(postDate),
    after: null,
  });

  useEffect(() => {
    if (!data?.posts) return;

    const newData = data.posts.edges || [];
    const endCursor = data.posts.pageInfo?.endCursor || null;

    setCurrentState({
      endCursor,
      data: [...currentState.data, ...newData],
    });
  }, [data, postDate]);

  useEffect(() => {
    if (isAtPageBottom && !loading && data.posts.pageInfo?.hasNextPage) {
      const { orderType, selectedDate, yesterday } = getPostsParams(
        selectedTab,
        postDate.toLocaleDateString("en-US")
      );

      refetch({
        topic: searchTopic,
        after: currentState.endCursor,
        first: NUMBER_OF_POSTS,
        order: orderType,
        postedBefore: selectedDate,
        postedAfter: yesterday,
      });
    }
  }, [isAtPageBottom]);

  const onClickTabItem = useCallback(
    (orderLabel: string) => {
      setCurrentState({
        data: [],
        endCursor: null,
      });
      setSelectedTab(orderLabel);
    },
    [setCurrentState, setSelectedTab]
  );

  const onChangeDate = useCallback((date: Date) => {
    setPostDate(date);
    setNewest({ data: [], endCursor: null });
    setPopular({ data: [], endCursor: null });
  }, []);

  const onSubmitSearchForm = useCallback(
    (topic: string) => {
      if (!topic) return;
      const { orderType, selectedDate, yesterday } = getPostsParams(
        selectedTab,
        postDate.toLocaleDateString("en-US")
      );
      setCurrentState({ data: [], endCursor: null });
      setSearchTopic(topic);
      refetch({
        topic: topic,
        first: NUMBER_OF_POSTS,
        order: orderType,
        postedBefore: selectedDate,
        postedAfter: yesterday,
      });
    },
    [selectedTab, postDate, setCurrentState, setSearchTopic, refetch]
  );

  const handleSetShowSearchForm = useCallback(() => {
    setShowSearchForm((prev) => !prev);
  }, [setShowSearchForm]);

  const handleSetSearchTopic = useCallback(
    (topic: string) => {
      setSearchTopic(topic);
    },
    [setSearchTopic]
  );

  return (
    <>
      {showFloatingWidget && <FloatingWidget />}
      {loading && <div className="loader">loading...</div>}
      <div className="container">
        {error && (
          <Message
            classNames="message--error"
            message="An error occurred when trying to reach server. Please try again later."
          />
        )}
        <PostsUI
          onSubmitSearchForm={onSubmitSearchForm}
          onChangeDate={onChangeDate}
          selectedTab={selectedTab}
          onClickTabItem={onClickTabItem}
          posts={currentState.data}
          postDate={postDate}
          setShowSearchForm={handleSetShowSearchForm}
          onClickClearSearchForm={() => handleSetSearchTopic("")}
          showSearchForm={showSearchForm}
          loading={loading}
        />
      </div>
    </>
  );
}

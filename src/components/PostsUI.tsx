import PostListUI from "./posts/PostListUI";
import Tab from "./tab/Tab";
import Search from "./search/Search";
import Header from "./header/Header";

export default function PostsUI({
  setShowSearchForm,
  onClickClearSearchForm,
  onSubmitSearchForm,
  selectedTab,
  onClickTabItem,
  onChangeDate,
  posts = [],
  postDate,
  showSearchForm = false,
  loading = false,
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

      <PostListUI posts={posts} loading={loading} />
      {/* <Posts /> */}
    </>
  );
}

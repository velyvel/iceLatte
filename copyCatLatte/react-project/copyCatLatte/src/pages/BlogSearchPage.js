/* eslint-disable */
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
// import Iconify from '../components/iconify';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock

import React, { useEffect, useState } from "react";
import { blogSearch } from '../_mock/blogsearch';

// import "./App.css";
import Item from '../_mock/blogSearchItem';

const BlogSearchPage = props => {
  const [blogs, setBlogs] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      blogSearchHttpHandler(query, true);
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
  };

  const blogSearchHttpHandler = async (query, reset) => {
    const params = {
      query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10 // 한 페이지에 보여 질 문서의 개수
    };

    const { data } = await blogSearch(params);
    if (reset) {
      setBlogs(data.documents);
    } else {
      setBlogs(blogs.concat(data.documents));
    }
  };

  return (
    <div className="container">
      <input
        type="search"
        placeholder="검색어를 입력 하세요..."
        name="query"
        className="input_search"
        onKeyDown={onEnter} // enter
        onChange={onTextUpdate} // change
        value={text} // view
      />

      <ul>
        {blogs.map((blog, index) => (
          <Item
            key={index}
            thumbnail={blog.thumbnail}
            title={blog.title}
            blogname={blog.blogname}
            contents={blog.contents}
            url={blog.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogSearchPage;

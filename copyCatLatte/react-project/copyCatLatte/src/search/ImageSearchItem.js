/* eslint-disable */
import React from "react";
import styled from "styled-components";

const ImageItemBlock = styled.div`
display: flex;

.thumbnail {
  margin-right: 1rem;
  img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }
}
.contents {
  h2 {
    margin: 0;
    a {
      color: black;
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
  }
}
& + & {
  margin-top: 3rem;
}
`;

const ImageSearchItem = props => {
  return (
  <ImageItemBlock>
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail_url} alt={props.thumbnail_url} />
        </dt>
        <dd>
          <h3>{props.collection.replaceAll('<b>', '').replaceAll('</b>', '')}</h3>
          <article>{props.display_sitename.replaceAll('<b>', '').replaceAll('</b>', '')}</article>
          <a href={props.image_url}>이미지링크 바로가기</a>          
          <a href={props.doc_url}>문서링크 바로가기</a>
        </dd>
      </dl>
    </li>
    </ImageItemBlock>
  );
};

export default ImageSearchItem;
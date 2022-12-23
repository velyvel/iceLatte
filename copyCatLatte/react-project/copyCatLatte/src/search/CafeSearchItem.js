/* eslint-disable */
import React from "react";
import styled from "styled-components";

const CafeItemBlock = styled.div`
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

const CafeSearchItem = props => {
  return (
  <CafeItemBlock>
    <li>
      <dl>
        <dt>
          <img src={props.thumbnail} alt={props.thumbnail} />
        </dt>
        <dd>
          <h3>{props.title.replaceAll('<b>', '').replaceAll('</b>', '')}</h3>
          <p>{props.cafename}</p>
          <article>{props.contents.replaceAll('<b>', '').replaceAll('</b>', '')}</article>
          <a href={props.url}>링크 바로가기</a>
        </dd>
      </dl>
    </li>
    </CafeItemBlock>
  );
};

export default CafeSearchItem;
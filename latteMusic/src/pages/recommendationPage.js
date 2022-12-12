import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack } from '@mui/material';
import styled from 'styled-components';
// components
import {NavLink} from "react-router-dom";
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/recommendation';
// ----------------------------------------------------------------------

export default function RecommendationPage() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const categories = [
    {
      name: 'all',
      text: '노래 추천 리스트',
    },
    {
      name: 'emotion',
      text: '기분별 노래',
    },
    {
      name: 'anniversary',
      text: '기념일 별 노래',
    },
    {
      name: 'weather',
      text: '날씨 별 노래',
    },
  ];

  const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

// const Category = styled.div`
  const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }
    & + & {
        margin-left: 1rem;
    }
`;

  return (
    <>
      <Helmet>
        <title>음악 추천</title>
      </Helmet>
      <Container>
        <CategoriesBlock>
          {
            categories.map( (category) => (
                  <Category key={ category.name }
                            activeClassName="active"
                            to={ category.name === 'all' ? "/" : `/${category.name}` }>
                    { category.text }
                  </Category>
              ))
          }
        </CategoriesBlock>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack>

        <ProductList products={PRODUCTS} />
        <ProductCartWidget />
      </Container>
    </>
  );
}

import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Pagination as AntPagination, PaginationProps as AntPaginationProps } from 'antd';
import styled from 'styled-components';

import { devices } from 'theme';

interface PaginationProps extends AntPaginationProps {
  total: number;
  pageSize: number;
}

function Pagination({ total, pageSize, ...props }: PaginationProps) {
  const itemRender: AntPaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <a>
          <ArrowLeftOutlined />
        </a>
      );
    }
    if (type === 'next') {
      return (
        <a>
          <ArrowRightOutlined />
        </a>
      );
    }
    return originalElement;
  };
  return (
    <StyledPagination
      itemRender={itemRender}
      total={total}
      pageSize={pageSize}
      showSizeChanger={false}
      {...props}
    />
  );
}

export default Pagination;

const StyledPagination = styled(AntPagination)`
  margin-top: ${p => p.theme.spacing.$24};
  margin-bottom: 124px;

  .ant-pagination-item a {
    color: ${p => p.theme.colors.primary.base};
    border-radius: 0;
  }

  .ant-pagination-item-active {
    border: none;
    a {
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.primary.base};
    }

    &:hover {
      a {
        color: ${p => p.theme.colors.white};
      }
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next a {
    color: ${p => p.theme.colors.primary.base};
  }

  @media ${devices.tablet} {
    margin-top: ${p => p.theme.spacing.$8};
    margin-bottom: ${p => p.theme.spacing.$20};
  }
`;

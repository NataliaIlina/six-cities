import styled from 'styled-components';

export const STitle = styled.h2`
  margin-top: 0;
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: 700;
  font-style: oblique;
  color: #000;
  text-align: center;
`;

export const SReviewItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export const SUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 54px;
  margin-right: 22px;
`;

export const SAvatar = styled.div`
  min-width: 54px;
  width: 54px;
  height: 54px;
  margin-bottom: 10px;
  background-image: url(img/avatar.svg);
  background-size: 100%;
  background-repeat: no-repeat;

  & img {
    display: block;
    border-radius: 50%;
  }
`;

export const SUserName = styled.span`
  font-size: 14px;
  color: #000;
  word-break: break-word;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const SComment = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  color: #000;
`;

export const STime = styled.time`
  font-size: 14px;
  line-height: 1;
  color: #5d5d5d;
`;

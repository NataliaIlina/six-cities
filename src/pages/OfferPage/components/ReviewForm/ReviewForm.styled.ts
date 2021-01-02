import styled from 'styled-components';

export const SLabel = styled.label`
  display: inline-block;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.2143;
  font-weight: 700;
  font-style: oblique;
  color: #000;
`;

export const SRating = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const STextarea = styled.textarea`
  width: 613px;
  height: 92px;
  margin-bottom: 12px;
  padding: 16px;
  font-size: 16px;
  color: #383838;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;

  &::placeholder {
    font-size: 16px;
    color: #9b9b9b;
  }
`;

export const SHelperText = styled.p`
  width: 402px;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 12px;

  & span {
    padding-left: 15px;
    background-image: url(img/star-active.svg);
    background-size: 12px 11px;
    background-repeat: no-repeat;
  }

  & b {
    font-weight: 700;
  }
`;

export const SButton = styled.button`
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  text-align: center;
  transition: color 0.3s, background-color 0.3s;
  outline: 0;
  width: 143px;
  font-size: 16px;
  padding: 16px 20px 13px;
  color: #fff;
  background-color: #4481c3;
  border-radius: 3px;

  &:focus,
  &:hover {
    background-color: #3069a6;
  }
  &:disabled {
    background-color: #c7c7c7;
  }
`;

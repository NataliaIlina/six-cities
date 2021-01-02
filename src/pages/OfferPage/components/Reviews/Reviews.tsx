import React from 'react';
import { TComment } from 'src/ducks/comments/commentsModels';
import { Box } from 'reflexbox';
import Rating from 'components/Rating/Rating';
import { STitle, SReviewItem, SUser, SAvatar, SUserName, SComment, STime } from './Reviews.styled';

type TProps = {
  comments: TComment[];
};

const Reviews: React.FC<TProps> = ({ comments }) => (
  <ul>
    <STitle>
      Reviews &middot;
      <span>{comments.length}</span>
    </STitle>
    {comments.map(({ comment, user, rating, id, date }) => {
      const reviewDate = new Date(date);
      const dateLocaleValue = reviewDate.toLocaleDateString('en', {
        month: 'long',
        year: 'numeric',
      });
      const dateTextValue = `${reviewDate.getFullYear()}-${reviewDate.getMonth()}-${reviewDate.getDay()}`;

      return (
        <SReviewItem key={id}>
          <SUser>
            <SAvatar>
              <img src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </SAvatar>
            <SUserName>{user.name}</SUserName>
          </SUser>
          <div>
            <Box mb="8px">
              <Rating rating={rating} width={98} height={16} />
            </Box>
            <SComment>{comment}</SComment>
            <STime dateTime={dateTextValue}>{dateLocaleValue}</STime>
          </div>
        </SReviewItem>
      );
    })}
  </ul>
);

export default Reviews;

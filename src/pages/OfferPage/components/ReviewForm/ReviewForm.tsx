import React, { useState, useMemo } from 'react';
import { RATINGS, MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH } from 'src/constants';
import RatingStar from 'pages/OfferPage/components/RatingStar/RatingStar';
import { Flex } from 'reflexbox';
import { SLabel, SHelperText, SRating, STextarea, SButton } from './ReviewForm.styled';

type TProps = {
  addComment: (id: number, rating: number, review: string) => void;
  hotelId: number;
};

const ReviewForm: React.FC<TProps> = ({ addComment, hotelId }) => {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const isFormValid = useMemo(
    () =>
      rating !== 0 &&
      review &&
      review.length >= MIN_REVIEW_LENGTH &&
      review.length <= MAX_REVIEW_LENGTH,
    [rating, review]
  );

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      addComment(hotelId, rating, review);
      setReview('');
      setRating(0);
    }
  };

  return (
    <form action="#" method="post" onSubmit={onFormSubmit}>
      <SLabel htmlFor="review">Your review</SLabel>
      <SRating>
        {RATINGS.map(({ value, title }) => (
          <RatingStar
            key={value}
            value={value}
            title={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRating(parseInt(e.target.value, 10))
            }
          />
        ))}
      </SRating>
      <STextarea
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value)}
      />
      <Flex justifyContent="space-between">
        <SHelperText>
          To submit review please make sure to set <span>rating</span> and describe your stay with
          at least <b>{MIN_REVIEW_LENGTH} characters</b>.
        </SHelperText>
        <SButton type="submit" disabled={!isFormValid}>
          Submit
        </SButton>
      </Flex>
    </form>
  );
};

export default ReviewForm;

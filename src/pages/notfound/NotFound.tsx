import {
  ErrorCode,
  ErrorMessage,
  HomeButton,
  NotFoundContainer,
} from "./styles";
const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>
        Oops! The page you’re looking for doesn’t exist.
      </ErrorMessage>
      <HomeButton to="/">Go Back Home</HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;

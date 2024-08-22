import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  padding: 3px;
  border-radius: 5px;
  flex: 0.5;
`;

const ImageCon = styled.div`
  margin-bottom: 3px;
  display: flex;

  img {
    height: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  }
  img:nth-of-type(1) {
    width: 250px;
    margin-right: 5px;
  }
  img:nth-of-type(2) {
    width: 125px;
  }
`;

const Name = styled.h3`
  font-size: 42px;
  font-weight: bold;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  width: fit-content;
  border-radius: 5px;
  padding: 15px;
  letter-spacing: -3.5px;
`;

const testImage =
  "https://image.kmib.co.kr/online_image/2017/1128/611311110011938257_1.jpg";

const googleImage =
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHtKEzsQIPn4PxGm4GW7ExPXwJ7spnuihP-hq4lNZnt34qblV48aXLCFgsd9GGyxfoo0pzGDBRbfO9_bKLDBlOZFG_h3L_IMK5w9MQHB1l9GmOzL-Uq2Cq6yHQqkZZcGmsv0vD/s1600/valentines-day-2015-5081660856991744.5-hp.gif";

export const Title = () => {
  return (
    <Container>
      <ImageCon>
        <img src={testImage} alt="companyImage1" />
        <img src={googleImage} alt="companyImage2" />
      </ImageCon>
      <Name>B1BND04N_C11</Name>
    </Container>
  );
};

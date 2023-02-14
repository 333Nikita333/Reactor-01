import styled from '@emotion/styled';

const UserProfile = styled.div`
  max-width: 350px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 300px 24px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
`;
const Userinfo = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0;
`;
const UserAvatar = styled.img`
  display: block;
  width: 150px;
  border: 1px solid black;
  border-radius: 45em;
  margin-bottom: 35px;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
`;
const UserTag = styled.p`
  font-size: 20px;
`;
const UserLocation = styled.p`
  font-size: 20px;
`;
const UserStats = styled.ul`
  font-size: 20px;
`;
const StatsLabel = styled.span`
  font-size: 20px;
`;
const StatsQuantity = styled.span`
  font-size: 20px;
`;

export {
  UserProfile,
  Userinfo,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsLabel,
  StatsQuantity,
};

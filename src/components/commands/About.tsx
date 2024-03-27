import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        안녕하세요. 제 이름은 변은성입니다.{" "}
        <HighlightSpan>
          {" "}
          터미널 환경에서 영감을 받아 포트폴리오를 구상하여 보았습니다.
        </HighlightSpan>
        !
      </p>
      <p>
        저는 <HighlightAlt>springboot 기반 백엔드 개발</HighlightAlt>을 메인으로
        개발을 진행하였습니다.
      </p>
      <p>
        현재는 클라우드 아키텍처에 관심을 갖고 공부 중에 있습니다. <br />
        help 명령어를 통해 저의 정보를 확인해 보실 수 있습니다.
      </p>
    </AboutWrapper>
  );
};

export default About;

import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        안녕하세요. 저는 26살 변은성입니다.{" "}
        <HighlightSpan>
          {" "}
          터미널 환경에서 영감을 받아 포트폴리오를 구성해 보았습니다.
        </HighlightSpan>
      </p>
      <p>
        저는 <HighlightAlt>springboot 기반 백엔드 개발</HighlightAlt>을 메인으로
        개발을 진행중이며, AI 모델 서빙용으로 Flask를 사용합니다. 현재는
        클라우드 아키텍처에 관심을 갖고 학습 중에 있습니다.
      </p>
      <p>
        다음은 저의 기술 스택입니다.
        <br />
        <strong>백엔드 프레임워크:</strong>
        <br />
        - SpringBoot
        <br />
        - Spring Security
        <br />
        - Spring Data JPA
        <br />
        - Spring Cloud
        <br />
        - Query DSL
        <br />
        - Flask
        <br />
        <strong>데이터베이스:</strong>
        <br />
        - MySQL
        <br />
        - MariaDB
        <br />
        - PostgreSQL
        <br />
        - Redis
        <br />
        <strong>infra:</strong>
        <br />
        - AWS (EC2, RDS, S3, Route53, ELB, VPC etc.)
        <br />
        - Azure (VM, SQL Database, Blob Storage)
        <br />
        <strong>메시징 및 모니터링:</strong>
        <br />
        - Kafka
        <br />
        - Prometheus
        <br />
        - Grafana
        <br />
        <br />
        <strong>컨테이너:</strong>
        <br />
        - Docker
        <br />
        - Doceer Swarm
        <br />
        <br />
        <strong>CI/CD:</strong>
        <br />
        - GitHub Action
        <br />
        - Jenkins
        <br />
        <strong>협업 툴:</strong>
        <br />
        - Slack
        <br />
        - Notion
        <br />- Gather Town
      </p>
    </AboutWrapper>
  );
};

export default About;

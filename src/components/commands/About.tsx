import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        열람해주셔서 감사합니다..! <HighlightSpan> </HighlightSpan>
      </p>
      <p>
        저는 <HighlightAlt>springboot 기반 백엔드 개발</HighlightAlt>을 메인으로
        개발을 진행중이며, AI 모델 서빙용으로 Flask를 사용합니다. 현재는
        클라우드 아키텍처에 관심을 갖고 학습 중에 있습니다.
      </p>
      <br />
      <br />
      <p>
        다음은 저의 기술 스택입니다.
        <br />
        <strong>Framwork:</strong>
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
        <br />
        <strong>DB:</strong>
        <br />
        - MySQL
        <br />
        - MariaDB
        <br />
        - PostgreSQL
        <br />
        - Redis
        <br />
        <br />
        <strong>Infra:</strong>
        <br />
        - AWS (EC2, RDS, S3, Route53, ELB, VPC etc.)
        <br />
        - Azure (VM, SQL Database, Blob Storage)
        <br />
        <br />
        <strong>MQ, Monitoring:</strong>
        <br />
        - Kafka
        <br />
        - Prometheus
        <br />
        - Grafana
        <br />
        <br />
        <strong>Container:</strong>
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
        <br />
        <strong>Colaboration tools:</strong>
        <br />
        - Slack
        <br />
        - Notion
        <br />
        - Gather Town
        <br />- Discord
      </p>
    </AboutWrapper>
  );
};

export default About;

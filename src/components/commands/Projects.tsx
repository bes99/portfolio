import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3"]) ? <Usage cmd="projects" /> : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        제가 개발하였던 프로젝트 리스트입니다. <br />
        projects go [project number] 명령어를 수행하시면 관련 링크로 이동합니다.
        <p>
          또한 블로그 내부 프로젝트 카테고리에서 개발 과정 및 이슈사항 또한
          확인해 보실 수 있습니다.
        </p>
        <div>
          blog: <a href="https://bes99.tistory.com/">Tistory</a>
        </div>
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "MSA 기반 축구 스쿼드 관리 앱 개발",
    desc: "세종대학교 축구 동아리 관리 앱을 개발",
    url: "https://bes99.tistory.com/48",
  },
  {
    id: 2,
    title: "Image Classification을 활용한 피부질환 진단 서비스 개발",
    desc: "이미지 분류모델을 활용한 개인화 피부질환 진료 앱 서비스",
    url: "https://bes99.tistory.com/9",
  },
  {
    id: 3,
    title: "생성형 AI모델 Diff-SVC 기반의 음성변환/합성 시스템 개발",
    desc: "생성형 AI 기반 사용자가 원하는 목소리로 음성을 변환해주는 앱 서비스",
    url: "https://bes99.tistory.com/7",
  },
];

export default Projects;

import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>고등학교 및 학사 관련 정보입니다.</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "High School",
    desc: "ONYANG YONGHWA HIGH SCHOOL | 2015.03 ~ 2018.02",
  },
  {
    title: "bachelor's degree",
    desc: "Intelligent Mechatronics Engineering of Sejong University  | 2018.03 ~ 2024.08(졸업예정)",
  },
];

export default Education;

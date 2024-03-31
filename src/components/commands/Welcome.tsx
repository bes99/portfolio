import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
        ###### ### #### ### ###     #### ######  #####  ### ###  #####    
        ##  #  ##  ##   ### #     ##  #  ##  # ##   ##  ### #  ##   #     
        ##     ##  ##   ### #     ###    ##    ##   ##  ### #  ##           
        ####   ##  ##   # ###      ###   ####  ##   ##  # ###  ##         
        ##     ##  ##   # ###       ###  ##    ##   ##  # ###  ##  ###      
        ##  #  ##  ##   #  ##     #  ##  ##  # ##   ##  #  ##  ##  ##     
       ######   ####   ### ##     ####  ######  #####  ### ##   #####      
                                                                                                                           
        `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____  ____  ____ 
    ||E ||||u ||||n ||
    ||__||||__||||__||

    ____  ____  ____  ____  ____ 
   ||S ||||E ||||o ||||n ||||g ||
   ||__||||__||||__||||__||||__||
    
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>name: 변은성</div>
        <div>age: 26</div>
        <div>
          degree: Intelligent Mechatronics Engineering of Sejong University{" "}
        </div>
        <div>Email: pas1007@naver.com</div>
        <div>tel: 010-9435-1649</div>
        <div>
          blog: <Link href="https://bes99.tistory.com/">Tistory</Link>
        </div>
        <div>
          github: <Link href="https://github.com/bes99">GitHub repo</Link>
        </div>
        <Seperator>----</Seperator>
        <div>
          명령어를 통해 추가 정보 열람이 가능합니다. 자세한 명령어에 대한 설명은
          다음 명령어를 입력해주세요. `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                                                                   
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

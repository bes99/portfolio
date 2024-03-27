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
        ###### ### #### ### ###     #### ######  #####  ### ###  #####     #####  #####    #####  ###### #### ####   ###### 
        ##  #  ##  ##   ### #     ##  #  ##  # ##   ##  ### #  ##   #      ## ##  ## ##  ##   ##  ##  #  ##   ##     ##  # 
        ##     ##  ##   ### #     ###    ##    ##   ##  ### #  ##          ## ##  ## ##  ##   ##  ##     ##   ##     ##    
        ####   ##  ##   # ###      ###   ####  ##   ##  # ###  ##          ####   ####   ##   ##  ####   ##   ##     ####  
        ##     ##  ##   # ###       ###  ##    ##   ##  # ###  ##  ###     ##     ## ##  ##   ##  ##     ##   ##     ##    
        ##  #  ##  ##   #  ##     #  ##  ##  # ##   ##  #  ##  ##  ##      ##     ## ##  ##   ##  ##     ##   ##  #  ##  # 
       ######   ####   ### ##     ####  ######  #####  ### ##   #####     ####   #### ##  #####  ####   #### ###### ###### 
                                                                                                                           
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
        <div>
          저의 깃허브 링크입니다.{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          명령어를 통해 정보 열람이 가능합니다. 자세한 명령어는 다음 명령어를
          입력해주세요. `<Cmd>help</Cmd>`.
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

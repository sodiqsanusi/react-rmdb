import { Content, Wrapper, Text } from "./TVInfoBarStyled";


const TVInfoBar = ({tv}) => {

  return ( 
    <Wrapper>
      { tv && (
      <Content>
        <Text>
          First Episode Released On : {tv.first_air_date}
        </Text>
         <Text>
          Series Aired On {tv.networks[0].name}
         </Text>
        <Text>
          Still In Production : {tv.in_production ? 'Yes': 'No'}
        </Text>
      </Content>
      )}
    </Wrapper>
   );
}
 
export default TVInfoBar;
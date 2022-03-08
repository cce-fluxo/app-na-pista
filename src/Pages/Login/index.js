import {
  Container,
  TitleContainer,
  Text,
  ButtonContainer,
  Image,
} from './styles';
import Background from '../../Assets/Images/bags.png';
import { colors } from '../../Constants/constants';
import SafeArea from '../../Utils/SafeArea';
import Button from '../../Components/Button';

export default function Login() {
  return (
    <SafeArea>
      <Container>
        <Image source={Background} resizeMode='cover'>
          <TitleContainer>
            <Text title={true}>NA {'\n'}PISTA</Text>
            <Text>Gestão financeira {'\n'}para entregadores</Text>
          </TitleContainer>
          <ButtonContainer>
            <Button
              width={'90%'}
              text='Login'
              border={true}
              marginTop={15}
              marginLeft={0}
              background={'white'}
              size={18}
            />
            <Button
              width={'90%'}
              text='Criar conta'
              border={true}
              marginTop={15}
              marginLeft={0}
              background={'white'}
              size={18}
            />
          </ButtonContainer>
        </Image>
      </Container>
    </SafeArea>
  );
}

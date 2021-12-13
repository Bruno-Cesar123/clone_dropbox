
import { Container, Content } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}

export default function Section({ variant, title, description }: Props) {
  return (
    <Container className={variant}>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}
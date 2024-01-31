import * as S from '@/styleMainPage'
import { operators } from '@/data/opearator'
import Operator from '@/components/Operator'
import Head from 'next/head'

const Home = () => {
  return (
    <S.Container>
      <S.Head>Выберите оператора:</S.Head>
      <S.OperatorList>
        {operators.map((operator) => (
          <S.OperatorListItem key={operator.id}>
            <Operator operator={operator} />
          </S.OperatorListItem>
        ))}
      </S.OperatorList>
    </S.Container>
  )
}
export default Home

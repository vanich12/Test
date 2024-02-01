'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { operators } from '@/data/opearator'
import { IOperator } from '@/models/IOperator'
import * as validation from '@/utils/validation/valid'
import { simulateApiRequest } from '../utils/request/simulateApiRequest'
import * as S from '@/styles/payFormStyle'
import { Button } from '@/components/Button'
import { withStyledButton } from '@/HOC/HOCButton'

const StyledButtonPay = withStyledButton(Button, S.PayButton)

const PaymentForm = () => {
  const router = useRouter()
  const { operator, id } = router.query

  useEffect(() => {
    const operatorObj = operators.find((item) => item.id === Number(id))
    if (operatorObj) {
      setOperator(operatorObj)
    }
  }, [router, id])

  const [opearator, setOperator] = useState<IOperator>()
  const [phone, setPhone] = useState(String)
  const [amount, setAmount] = useState(String)
  const [loading, setLoading] = useState(Boolean)
  const [success, setSuccess] = useState(Boolean)
  const [err, setErr] = useState(Boolean)

  const handleAmountWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    validation.handleAmount(e, setAmount)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    if (
      validation.validatePhoneNumber(phone) &&
      validation.sumValidate(amount)
    ) {
      e.preventDefault()
      setLoading(true)
      setErr(false)
      try {
        // Имитация запроса к API
        await simulateApiRequest()
        setSuccess(true)
        // Имитация возврата на главный экран после успешной оплаты
        setTimeout(() => {
          router.push('/')
        }, 2000) // Подождем 2 секунды перед возвратом на главный экран
      } catch (error) {
        setErr((prev) => !prev)
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <S.Content>
      <S.Container>
        <h1>Оплата для {operator}</h1>
        <S.FormContainer>
          <S.Image src={opearator?.image} />
          <div>
            <S.Input
              mask="+7 (999) 999-99-99"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <S.Description
              color={validation.validatePhoneNumber(phone) ? 'green' : ''}>
              {validation.validatePhoneNumber(phone)
                ? 'Номер валидный'
                : 'Введите номер телефона'}
            </S.Description>
          </div>
          <div>
            <S.Input
              mask="9999"
              type="tel"
              value={amount}
              onChange={handleAmountWrapper}
            />
            <S.Description
              color={validation.sumValidate(amount) ? 'green' : ''}>
              {validation.sumValidate(amount)
                ? 'Отлично'
                : 'Введите сумму от 1 до 1000 руб.'}
            </S.Description>
          </div>
          <StyledButtonPay
            type="submit"
            disabled={
              (loading &&
                validation.validatePhoneNumber(phone) &&
                validation.sumValidate(amount)) ||
              success
            }
            onClick={handleSubmit}>
            Подтвердить оплату
          </StyledButtonPay>
        </S.FormContainer>
        {loading && <S.Response>Идет обработка запроса...</S.Response>}
        {success && (
          <S.Response>
            Оплата успешно завершена. Возвращаемся на главный экран...
          </S.Response>
        )}
        {err && <S.Response>Произошла ошибка...</S.Response>}
      </S.Container>
    </S.Content>
  )
}

export default PaymentForm

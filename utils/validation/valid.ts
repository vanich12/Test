import { Dispatch, SetStateAction } from "react"



export const validatePhoneNumber = (phone:string): boolean => {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/

    // Проверка соответствия маске
    if (!phoneRegex.test(phone)) {
      return false
    }

    // Проверка длины
    const digitsOnly = phone.replace(/\D/g, '') // Удаляем все нецифровые символы
    return digitsOnly.length === 11 // Ожидаемая длина номера телефона
  }

  export const sumValidate = (amount:string): boolean => {
    const sum = amount.replace(/\D/g, '')
    return /^[1-9]\d{0,999}$/.test(sum) && sum.length >= 1
  }

  export const handleAmount = (e: React.ChangeEvent<HTMLInputElement>,setAmount: Dispatch<SetStateAction<string>>) => {
    if (Number(e.target.value) > 1000) {
      setAmount((prevValue) => '1000')
    } else {
      setAmount((prevValue) => e.target.value)
    }
  }
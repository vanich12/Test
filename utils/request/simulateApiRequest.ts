import { sumValidate, validatePhoneNumber } from "../validation/valid"

export const simulateApiRequest = async () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5
        if (isSuccess) {
          resolve()
        } else {
          reject(new Error('Ошибка при обработке запроса.'))
        }
      }, 1000) // Имитация задержки в 1 секунду
    })
  }

  
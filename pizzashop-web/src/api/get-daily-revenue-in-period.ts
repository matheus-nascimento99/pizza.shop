import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodRequest {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export const getDailyRevenueInPeriod = async ({
  from,
  to,
}: GetDailyRevenueInPeriodRequest) => {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
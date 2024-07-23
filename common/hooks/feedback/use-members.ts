import { fetcher } from "@/lib/utils"
import {type InferSelectModel} from "drizzle-orm"
import {feedback} from "@/db/schema"
export type User = InferSelectModel<typeof feedback>;
import useSWR from "swr"

export const useMembers = (options: any) => {
    const {error, data, isLoading, mutate} = useSWR<{members: User[], meta: {total: number, last_page: number | undefined}}>(`/api/feedback?${new URLSearchParams(options).toString()}`, fetcher)
    return {error, members: data?.members, mutate, isLoading, meta: data?.meta}
}
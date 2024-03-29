import { useQuery } from "@tanstack/react-query";
import { ErrorResponse } from "@/types/types";
import { UserInfo } from "@/types/types";
import { hostUrl } from "@/lib/variables";

export const useFetchUserInfoQuery = () => {
  return useQuery<any, ErrorResponse, { userId: string; user?: UserInfo }>(
    ["userInfo"],
    async () => {
      const response = await fetch(`${hostUrl}/api/auth/get-user-info`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Unable to get user info. Are you authenticated?");
      }
      return await response.json();
    },
    { retry: false }
  );
};

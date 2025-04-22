import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getStudentPackage } from "../api/getStudentPackage";
import { useRouter } from "next/router";
import { updateStudentPackage } from "../api/updateStudentPackage";

export const useStudentPackage = () => {
  const router = useRouter();
  const studentId = router.query.studentId;

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["studentPackage", studentId],
    queryFn: () => {
      if (studentId && !Array.isArray(studentId)) {
        return getStudentPackage(studentId);
      } else {
        return Promise.resolve(null);
      }
    },
  });

  const udpatePackageMutation = useMutation({
    mutationFn: updateStudentPackage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["studentPackage"],
      });
    },
  });

  const udpatePackage = (lessonsQuantity) => {
    udpatePackageMutation.mutate({ studentId, lessonsQuantity });
  };

  const { isPending: isMutationPending, isError: isMutationError } =
    udpatePackageMutation;

  return {
    isPending,
    error,
    data,
    udpatePackage,
    isMutationPending,
    isMutationError,
  };
};

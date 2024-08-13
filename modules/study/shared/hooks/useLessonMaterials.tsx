import { useEffect, useState } from "react";

export function useLessonMaterials(fetchFunction, lessonNumber) {
  const [isLoading, setIsLoading] = useState(true);
  const [lessonMaterials, setLessonMaterials] = useState<any>(null);

  useEffect(() => {
    const getMaterials = async () => {
      if (lessonNumber) {
        try {
          const response = await fetchFunction(lessonNumber);
          const data = response.data;
          setLessonMaterials(data);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getMaterials();
  }, [lessonNumber]);

  return {
    isLoading,
    lessonMaterials,
  };
}
